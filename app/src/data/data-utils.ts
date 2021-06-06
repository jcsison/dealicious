export const generateInsertExpression = (updateObject: object) => {
  const cols = Object.keys(updateObject)
    .filter((keyname: string) => updateObject[keyname] !== undefined)
    .join(', ');

  const values = Object.keys(updateObject)
    .filter((keyname: string) => updateObject[keyname] !== undefined)
    .map((keyname: string) => `:${keyname}`)
    .join(', ');

  return `(${cols}) VALUES (${values})`;
};
