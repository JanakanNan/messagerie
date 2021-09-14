import {IsEmail, IsNumber, IsString} from 'class-validator';

export class UsersDTO {
    @IsEmail()
    email: string;
    @IsString()
    password: string;

    nom: string;

    prenom: string;

    age: string;
}