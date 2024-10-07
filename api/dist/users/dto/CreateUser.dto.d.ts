export declare enum Role {
    EMPLOYER = "employer",
    EMPLOYEE = "employee"
}
export declare class CreateUserDto {
    userName: string;
    role: Role;
    displayName?: string;
    avatarUrl?: string;
}
