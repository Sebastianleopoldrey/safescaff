import { Fragment } from 'react'

interface ProseProps {
  /**
   * Body copy where:
   * - `\n` starts a new line (one sentence / one thought per line)
   * - `**word**` marks the most important words as bold
   *
   * The bold color is inherited via `currentColor`, so it works on both
   * light and dark backgrounds.
   */
  text: string
  className?: string
  /** Render element for each line. Defaults to a block-level span. */
  as?: 'p' | 'div'
}

/** Splits a single line on `**...**` and renders the odd segments as bold. */
function renderLine(line: string) {
  const segments = line.split(/\*\*(.+?)\*\*/g)
  return segments.map((segment, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold">
        {segment}
      </strong>
    ) : (
      <Fragment key={i}>{segment}</Fragment>
    ),
  )
}

export function Prose({ text, className, as: Tag = 'p' }: ProseProps) {
  const lines = text.split('\n')

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {renderLine(line)}
        </span>
      ))}
    </Tag>
  )
}
