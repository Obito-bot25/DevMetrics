import { useState, useEffect } from 'react';
import { playBlip } from './audio';

const THEME_KEY = 'devmetrics-theme';

export function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';

  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
  } catch (err) {
    console.debug('Failed to read theme from localStorage:', err);
  }

  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return systemDark ? 'dark' : 'light';
}

function updateThemeMeta(theme) {
  if (typeof document === 'undefined') return;
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'dark' ? '#090a0f' : '#f7f7f9');
  }
}

// Global active theme listeners for React reactivity across components
const listeners = new Set();

function notifyListeners(nextTheme) {
  listeners.forEach((fn) => {
    try {
      fn(nextTheme);
    } catch (e) {
      console.error(e);
    }
  });
}

export function applyTheme(nextTheme, persist = true) {
  if (typeof document === 'undefined') return;

  const validTheme = nextTheme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', validTheme);
  updateThemeMeta(validTheme);

  if (persist) {
    try {
      localStorage.setItem(THEME_KEY, validTheme);
    } catch (err) {
      console.debug('Failed to persist theme:', err);
    }
  }

  notifyListeners(validTheme);
}

export function toggleThemeWithTransition() {
  if (typeof document === 'undefined') return;

  const currentTheme = document.documentElement.getAttribute('data-theme') || getInitialTheme();
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Play subtle cyber blip sound for tactile feedback
  playBlip();

  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Use View Transitions API when available and reduced-motion is not requested
  if (typeof document.startViewTransition === 'function' && !prefersReducedMotion) {
    try {
      const transition = document.startViewTransition(() => {
        applyTheme(nextTheme, true);
      });
      if (transition && transition.catch) {
        transition.catch(() => {
          applyTheme(nextTheme, true);
        });
      }
    } catch {
      applyTheme(nextTheme, true);
    }
  } else {
    // Smooth, scoped CSS transition fallback when View Transitions API is unsupported
    if (!prefersReducedMotion) {
      document.documentElement.classList.add('theme-transition-fallback');
    }

    try {
      applyTheme(nextTheme, true);
    } finally {
      if (!prefersReducedMotion) {
        setTimeout(() => {
          document.documentElement.classList.remove('theme-transition-fallback');
        }, 300);
      }
    }
  }

  return nextTheme;
}

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || getInitialTheme();
    }
    return 'light';
  });

  useEffect(() => {
    const handleThemeChange = (newTheme) => {
      setThemeState(newTheme);
    };

    listeners.add(handleThemeChange);

    // Sync with system preference if user hasn't set an explicit manual preference
    const mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    const handleSystemChange = (e) => {
      const hasSaved = localStorage.getItem(THEME_KEY);
      if (!hasSaved) {
        applyTheme(e.matches ? 'dark' : 'light', false);
      }
    };

    if (mediaQuery && mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
    }

    return () => {
      listeners.delete(handleThemeChange);
      if (mediaQuery && mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemChange);
      }
    };
  }, []);

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme: toggleThemeWithTransition,
    setTheme: (t) => applyTheme(t, true),
  };
}
