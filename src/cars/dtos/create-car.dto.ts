import { IsString } from "class-validator"

export class CreateCarDto {
   
   @IsString( { message: 'The "brand" most be a cool string' } )
   public readonly brand: string
   @IsString()
   public readonly model: string
}