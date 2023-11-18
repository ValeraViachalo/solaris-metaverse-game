import WhitePaper from './Docs.pdf'

export const pdf = (doc: string) => {
  switch(doc) {
    case 'White Paper': 
      return WhitePaper;

    default:
      throw new Error('Document is not definded')
  }
};