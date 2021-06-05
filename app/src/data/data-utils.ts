export const generateInsertExpression = (updateObject: object) => {
  let cols = Object.keys(updateObject)
    .map((keyname: string) => `${keyname}`)
    .filter((keyname: string) => updateObject[keyname] !== undefined)
    .join(', ');

  let values = Object.keys(updateObject)
    .map((keyname: string) => `:${keyname}`)
    .filter(
      (keyname: string) => updateObject[keyname.substring(1)] !== undefined
    )
    .join(', ');

  return `(${cols}) VALUES (${values})`;
};
