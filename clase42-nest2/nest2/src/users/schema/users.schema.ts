import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UsersDocument = HydratedDocument<User>

@Schema()
export class User{

    @Prop()
    first_name:string;
    @Prop()
    last_name:string;
    @Prop()
    email:string;

}

export const UserSchema = SchemaFactory.createForClass(User)
// Schema model
// const userSchema = new Schema({})
// model('collection', userSchema)