export enum DocumentClassEnum {
  CORP = 'CORP'
}

export enum DocumetTypeEnum {
 COU = 'COU', // Court Order
}

export const DOCUMENT_TYPES = {
  courtOrder: {
    class: DocumentClassEnum.CORP,
    type: DocumetTypeEnum.COU
  }
}
