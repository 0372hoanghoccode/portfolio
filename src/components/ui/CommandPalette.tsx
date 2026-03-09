import { useCallback, useEffect, useRef, useState } from 'react';

interface CommandItem {
  id: string;
  label: string;
  description: string;
  section: string;
  icon: string;
  shortcut?: string;
}

const commands: CommandItem[] = [
  { id: 'explorer', label: 'README.md', description: 'About Vũ Huy Hoàng', section: 'explorer', icon: '📄', shortcut: 'Ctrl+1' },
  { id: 'projects', label: 'projects/', description: 'Featured projects', section: 'projects', icon: '🗂', shortcut: 'Ctrl+2' },
  { id: 'skills', label: 'package.json', description: 'Tech stack & skills', section: 'skills', icon: '📦', shortcut: 'Ctrl+3' },
  { id: 'git', label: 'CHANGELOG.md', description: 'Experience & timeline', section: 'git', icon: '📋', shortcut: 'Ctrl+4' },
  { id: 'contact', label: 'terminal', description: 'Contact & links', section: 'contact', icon: '💻', shortcut: 'Ctrl+5' },
  { id: 'github', label: 'Open GitHub', description: 'github.com/0372hoanghoccode', section: 'github', icon: '🐙' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? commands.filter(c =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
    )
    : commands;

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setSelected(0);
  }, []);

  const execute = useCallback((cmd: CommandItem) => {
    close();
    if (cmd.section === 'github') {
      window.open('https://github.com/0372hoanghoccode', '_blank', 'noopener,noreferrer');
      return;
    }
    const target = document.getElementById(`section-${cmd.section}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Sync tabs + sidebar + activity bar
    document.querySelectorAll<HTMLElement>('[data-section]').forEach(el => {
      el.classList.toggle('active', el.dataset.section === cmd.section);
      if (el.getAttribute('aria-selected') !== null) {
        el.setAttribute('aria-selected', el.dataset.section === cmd.section ? 'true' : 'false');
      }
    });
  }, [close]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(prev => !prev);
        setQuery('');
        setSelected(0);
      }
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [close]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected(s => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected(s => Math.max(s - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selected]) execute(filtered[selected]);
    }
  };

  if (!open) return null;

  return (
    <div
      className="command-palette-overlay open"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="command-palette-box"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="none"
      >
        <input
          ref={inputRef}
          className="command-palette-input"
          type="text"
          placeholder="> Go to file, section, or command..."
          value={query}
          onChange={e => { setQuery(e.target.value); setSelected(0); }}
          aria-label="Search commands"
        />
        <div className="command-palette-results" role="listbox">
          {filtered.length === 0 && (
            <div style={{ padding: '12px 16px', color: 'var(--vsc-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
              No results — try "readme", "projects", "skills", "contact"
            </div>
          )}
          {filtered.map((cmd, i) => (
            <div
              key={cmd.id}
              className={`cp-item${i === selected ? ' selected' : ''}`}
              onClick={() => execute(cmd)}
              onMouseEnter={() => setSelected(i)}
              role="option"
              aria-selected={i === selected}
            >
              <span style={{ fontSize: '15px', width: '20px', textAlign: 'center' }}>{cmd.icon}</span>
              <span style={{ flex: 1 }}>
                <span style={{ color: 'var(--vsc-text-active)' }}>{cmd.label}</span>
                <span style={{ color: 'var(--vsc-text-muted)', marginLeft: '10px', fontSize: '11px' }}>{cmd.description}</span>
              </span>
              {cmd.shortcut && (
                <span className="cp-badge">{cmd.shortcut}</span>
              )}
            </div>
          ))}
        </div>
        <div className="cp-footer">
          <span>↑↓ to navigate</span>
          <span>↵ to select</span>
          <span>Esc to close</span>
          <span style={{ marginLeft: 'auto' }}>Ctrl+K to toggle</span>
        </div>
      </div>
    </div>
  );
}
