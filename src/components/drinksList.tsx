import {FC} from "react";
import Image from "next/image";
import Link from "next/link";

interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}
interface DrinksListProps {
    drinks: Drink[];
}
const DrinksList: FC<DrinksListProps> = ({drinks = []})  => (
    <>
        {drinks.length === 0 && <h3>Sorry, no drinks found</h3>}
        <ul className="grid sm:grid-cols-2 gap-6 mt-6">
            {drinks.map((drink) => {
                return (
                    <li key={drink.idDrink}>
                        <h3>{drink.strDrink}</h3>
                        <Link
                            href={`/drinks/${drink.idDrink}`}
                            className="text-xl font-medium"
                        >
                            <div className='relative h-48 mb-4'>
                                <Image
                                    src={drink.strDrinkThumb}
                                    alt={drink.strDrink}
                                    fill
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                    className='rounded-md object-cover'
                                />
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </>

);

export default DrinksList;