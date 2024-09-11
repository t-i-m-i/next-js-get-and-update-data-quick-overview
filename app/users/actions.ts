"use server"

import { revalidatePath } from "next/cache";
import { updateUser } from "../data/user";

export async function updateNameAction(prevState: {
    userId: string;
}, formData: FormData) {

    // sleep 1s
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const userId = prevState.userId;
    const newName = formData.get('name') as string;
    
    await updateUser(userId, newName);
    revalidatePath(`/users/${userId}`);

    return {
        userId: userId,
        name: "",
        message: "success",
    }
}