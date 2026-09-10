import type { MouseEvent } from 'react'

/** True for a plain left click with no modifier keys — the cases a link's
 * default browser behavior (new tab, new window, etc.) should NOT be
 * overridden for. */
export function isPlainLeftClick(event: MouseEvent) {
  return event.button === 0 && !event.metaKey && !event.altKey && !event.ctrlKey && !event.shiftKey
}
