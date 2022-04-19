import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private model: Repository<User>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const emailExists = await this.model.findOne({ where: { email: createUserDto.email }});

    if(emailExists){
      throw new NotAcceptableException("Email já está sendo usado!");
    }

    createUserDto.ativo = true;
    createUserDto.senha = await hash(createUserDto.senha, 8);

    const userCreated = await this.model.save(createUserDto);
    return userCreated;
  }

  async findAll(): Promise<User[]> {
    const list = await this.model.find();
    return list;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.model.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }
    return user;
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return await this.model.findOne({ where: { email } });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.model.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    const emailExists = await this.model.findOne({ where: { email: updateUserDto.email }});

    if(emailExists && emailExists.email != user.email){
      throw new NotAcceptableException("Email já está sendo usado!");
    }

    if(updateUserDto.senha){
      updateUserDto.senha = await hash(updateUserDto.senha, 8);
    }

    await this.model.update({ id }, updateUserDto);

    // pesquisa o user ATUALIZADO para retornar, consulta extra, pode ser melhorada
    return await this.model.findOne({ where: { id } });
  }

  async remove(id: string): Promise<User> {
    const user = await this.model.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.model.update({ id }, { ativo: false });

    // pesquisa o user ATUALIZADO para retornar, consulta extra, pode ser melhorada
    return await this.model.findOne({ where: { id } });
  }
}
