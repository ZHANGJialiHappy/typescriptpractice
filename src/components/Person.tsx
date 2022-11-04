interface PersonProps {
    name: string;
    email: string; 
    age: number; 
    isMarried: boolean;
    friends: string[];
    country: string;
}

export enum Country {
    Brazil="Brazil",
    Canada="Canada",
    France="France",
}

export const Person = ({name, email, age, isMarried, friends, country}:PersonProps) => {
    return(
        <div>
            <h1>Name:{name}</h1>
            <h1>Email:{email}</h1>
            <h1>Age:{age}</h1>
            <h1>This person {isMarried? "is" : "is not"}</h1>
            <h1>This person's friends are</h1>
            {friends.map((friend:string) => (
                <h1 key={email}>{friend}</h1>
            ))}
            <h1>Country:{country}</h1>
        </div>
    )
}