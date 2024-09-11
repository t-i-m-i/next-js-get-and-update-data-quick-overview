import { getUser } from "../data/user";
import Form from "./form";

interface Params {
    userId: string;
}

export default async function Users(params: Params) { 

    const user = await getUser(params.userId);
    
    return (
      <div className="container min-h-svh flex items-center justify-center tomato">
        <div className="tomato">
          <p className="text-center">Users {user.name}</p>

          <Form userId={user.id} />
        </div>
      </div>
    );
  }
  