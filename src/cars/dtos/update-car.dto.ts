import { IsOptional, IsString, IsUUID } from "class-validator"

export class UpdateCarDto {
   
   @IsOptional()
   @IsString()
   @IsUUID()
   public readonly id?: string;

   @IsOptional()
   @IsString( { message: 'The "brand" most be a cool string' } )
   public readonly brand?: string

   @IsOptional()
   @IsString()
   public readonly model?: string
}