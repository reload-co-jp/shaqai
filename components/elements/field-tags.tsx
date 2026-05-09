import { FC } from "react"
import type { Field } from "lib/db"

type Props = {
  fields: Field[]
}

export const FieldTags: FC<Props> = ({ fields }) => (
  <div
    style={{
      marginBottom: "1.5rem",
      display: "flex",
      gap: ".5rem",
      flexWrap: "wrap",
    }}
  >
    {fields.map((field) => (
      <a
        key={field.id}
        href={`/fields/${field.id}/`}
        style={{
          fontSize: ".8rem",
          background: "#1e1a12",
          border: "1px solid #302b1e",
          borderRadius: "4px",
          color: "#9e9888",
          padding: ".3rem .8rem",
          textDecoration: "none",
        }}
      >
        {field.name}
      </a>
    ))}
  </div>
)
