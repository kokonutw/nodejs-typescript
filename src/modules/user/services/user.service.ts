import { UserRepository } from "../repositories/user.repository";


export class UserService{
    private readonly userRepository: UserRepository;
    constructor(){
        this.userRepository = new UserRepository();
    }

    async getUsers(){
        return await this.userRepository.getUsers();
    }

    async getUserById(id: number){
        return await this.userRepository.getUserById(id);
    }
}