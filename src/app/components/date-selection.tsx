"use client";

import { useState } from "react";
import { Menu } from '@headlessui/react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { DateRange, Range } from "react-date-range";
import { format, addDays } from "date-fns";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export const DateSelection = () => {
    const [date, setDate] = useState<Range[]>([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);

    return (
        <Menu as="div" className="w-full h-full flex xl:flex-row">
            <div className="relative flex-1">
                <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
                    <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                        <FaCalendarAlt className="text-accent" />
                        <div className="text-[15px] uppercase font-bold">Wybierz Date</div>
                    </div>
                    <div className="flex items-center gap-x-3 xl:ml-6">
                        <div className="text-[13px] font-medium text-secondary">
                            {format(date[0].startDate!, "dd/MM/yyyy")}
                        </div>
                        <FaArrowRightLong className="text-accent text-[12px]" />
                        <div className="text-[13px] font-medium text-secondary">
                            {date[0].endDate ? format(date[0].endDate!, "dd/MM/yyyy") : "--/--/----"}
                        </div>
                    </div>
                </Menu.Button>
                <Menu.Items className="dropdown-menu shadow-lg absolute top-full left-1/2 xl:left-0 z-50 transform
                -translate-x-1/2 xl:-translate-x-0 rounded-[10px] overflow-hidden">
                    <DateRange
                        onChange={(ranges) => setDate([ranges.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        rangeColors={['rgb(20 116 135)']}
                        minDate={addDays(new Date(), 0)}
                    />
                </Menu.Items>
            </div>
        </Menu>
    );
};

