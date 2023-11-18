export const createSlug = (input: string):string  => {
  // Convert to lowercase and replace spaces with dashes
  const slug = input.toLocaleLowerCase().replace(/\s+/g, '-');

  // Remove spacial characters
  const cleanedSlug = slug.replace(/[^\w-]/g, '')

  return cleanedSlug
}

export function formatNumber(number:number):string {
  const numberString = number.toString();

  let formattedNumber = '';
  let counter = 0;

  for (let i = numberString.length - 1; i >= 0; i--) {
      formattedNumber = numberString[i] + formattedNumber;
      counter++;

      if (counter % 3 === 0 && i > 0) {
          formattedNumber = '.' + formattedNumber;
      }
  }

  return formattedNumber;
}

