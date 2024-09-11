type User = {
    id: string;
    name: string;
};

(global as any).user = {
    id: "50",
    name: "Hulk Incredible"
} as User;

export async function getUser(userId: string) {
    // return global.user as User;
    return global.user as User;
}

export async function updateUser(userId: string, name: string) {
    (global.user as User).name = name;
}