export function selectField(column, row) {
  return {
    type: ActionNames.SelectField,
    columnId: column,
    rowId: row
  }
}

const ActionNames = {
  SelectField: "SELECT_FIELD"
}
