import { Optional, Model, DataTypes } from 'sequelize'

import { TableMetadata } from '../types/metadata'
import Database from '../providers/database'

export interface CountryAttributes {
  id: number
  name: string
  label: string
  description: string
}

type CountryCreationAttributes = Optional<CountryAttributes, 'id'>

interface CountryAttributesWithMetadata
  extends CountryAttributes,
    TableMetadata {}

class Countries
  extends Model<CountryAttributes, CountryCreationAttributes>
  implements CountryAttributesWithMetadata {
  public id!: number
  public name!: string
  public label!: string
  public description!: string

  public readonly createdBy!: number
  public readonly createdDate!: Date
  public readonly deleted!: boolean
  public readonly deletedDate!: Date | null
  public readonly deletedBy!: number | null
  public readonly modifiedBy!: Date | null
  public readonly modifiedDate!: Date | null
}

Countries.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'countries',
    sequelize: Database.postgres,
    underscored: true,
  },
)

export default Countries
