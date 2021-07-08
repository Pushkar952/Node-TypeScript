export interface TableMetadata {
  createdBy: number
  createdDate: Date
  modifiedBy: Date | null
  modifiedDate: Date | null
  deleted: boolean
  deletedBy: number | null
  deletedDate: Date | null
}
