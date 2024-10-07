export declare enum ROLE {
    EMPLOYER = "employer",
    EMPLOYEE = "employee"
}
export declare class CreateUserDto {
    userName: string;
    role: string;
    displayName?: string;
    avatarUrl?: string;
}
