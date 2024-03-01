'use client';

import ButtonCustom from "@/components/buttonCustom";
import {FC} from "react";
import {SortBy} from "@/components/taskList";

interface TasksFilterProps {
    sortHandler: (range: SortBy) => void;
    activeSort: SortBy;
}
const ButtonsBlock = <FilterType extends unknown>({filterHandler, activeButton, config}: {
    filterHandler: (range: FilterType) => void;
    activeButton: FilterType;
    config: FilterType[];
}) => {
    const getActiveButtonClass = (label: FilterType) => activeButton === label? 'accent' : 'info';

    return (
        <div className='join my-3 shadow-lg'>
            {
                config.map((item) => (
                    <ButtonCustom
                        key={item as string}
                        onClick={() => filterHandler(item)}
                        label={item as string}
                        type={getActiveButtonClass(item)}
                        size="sm"/>
                ))
            }
        </div>
    );
}

export default ButtonsBlock;
