"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import "./global-maps.css";
import MapGlobal from "../../../public/Global-Map/MAP.webp"
import argentinaFlag from '../../../public/Global-Map/ArgentinaFlag.webp';
import colombiaFlag from "../../../public/Global-Map/ColombiaFlag.webp";
import ecuadorFlag from "../../../public/Global-Map/EcuadorFlag.webp";
import mexicoFlag from "../../../public/Global-Map/MexicoFlag.webp";
import peruFlag from "../../../public/Global-Map/PeruFlag.webp";
import officeArgentina from "../../../public/Global-Map/office/Office-Argentina.png";
import officeColombia from "../../../public/Global-Map/office/Office-Colombia.png";
import officeEcuador from "../../../public/Global-Map/office/Office-Ecuador.png";
import officeMexico from "../../../public/Global-Map/office/Office-Mexico.png";
import officePeru from "../../../public/Global-Map/office/Office-Peru.png";

interface CountryData {
    id: string;
    name: string;
    flag: any;
    office: any;
    position: { top: string; left: string };
    employees?: number;
    established?: string;
}

export const BoxMap = () => {
    const [activeCountry, setActiveCountry] = useState<string | null>(null);
    const { t } = useTranslation('common');

    const countries: CountryData[] = [
        {
            id: "ecuador",
            name: t('globalPresence.countries.ecuador'),
            flag: ecuadorFlag,
            office: officeEcuador,
            position: { top: "305px", left: "25px" },
            employees: 28,
            established: "2021"
        },
        {
            id: "peru",
            name: t('globalPresence.countries.peru'),
            flag: peruFlag,
            office: officePeru,
            position: { top: "370px", left: "80px" },
            employees: 45,
            established: "2020"
        },
        {
            id: "argentina",
            name: t('globalPresence.countries.argentina'),
            flag: argentinaFlag,
            office: officeArgentina,
            position: { top: "350px", left: "232px" },
            employees: 38,
            established: "2019"
        },
        {
            id: "mexico",
            name: t('globalPresence.countries.mexico'),
            flag: mexicoFlag,
            office: officeMexico,
            position: { top: "200px", left: "30px" },
            employees: 35,
            established: "2022"
        },
        {
            id: "colombia",
            name: t('globalPresence.countries.colombia'),
            flag: colombiaFlag,
            office: officeColombia,
            position: { top: "250px", left: "185px" },
            employees: 32,
            established: "2021"
        }
    ];
    return (
        <div className="relative w-full h-full box-map-container">
            {/* Map Container */}
            <div className="relative w-full h-full">
                {/* Background Map */}
                <div className="relative w-full h-full min-h-[400px] min-w-[700px]" style={{ aspectRatio: '782/447' }}>
                    <Image
                        src={MapGlobal}
                        alt="Global Map"
                        fill
                        className="object-container mt-18"
                        priority
                    />

                    {/* Country Markers */}
                    {countries.map((country, index) => (
                        <motion.div
                            key={country.id}
                            className="absolute cursor-pointer group"
                            style={{
                                top: country.position.top,
                                left: country.position.left,
                                transform: 'translate(-50%, -50%)'
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            onClick={() => setActiveCountry(activeCountry === country.id ? null : country.id)}
                            whileHover={{ scale: 1.1, zIndex: 50 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Country Flag Container */}
                            <div className={`relative flex items-center gap-2 p-2 rounded-lg border-2 transition-all duration-300 z-20 ${activeCountry === country.id
                                ? 'bg-primary/20 border-primary shadow-lg scale-110'
                                : 'bg-white/90 border-white/50 hover:bg-white hover:border-primary/50 hover:shadow-md hover: z-20'
                                }`}>
                                {/* Flag */}
                                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <Image
                                        src={country.flag}
                                        alt={`${country.name} flag`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Country Name */}
                                <span className={`text-sm font-medium whitespace-nowrap transition-colors duration-300 ${activeCountry === country.id
                                    ? 'text-white'
                                    : 'text-gray-800'
                                    }`}>
                                    {country.name}
                                </span>

                                {/* Pulse Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-lg border-2 border-primary"
                                    initial={{ scale: 1, opacity: 0 }}
                                    animate={activeCountry === country.id ? {
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 0, 0.5]
                                    } : {}}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>

                            {/* Tooltip on Hover */}
                            <AnimatePresence>
                                {activeCountry === country.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.8 }}
                                        className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-50"
                                    >
                                        <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg overflow-hidden shadow-xl z-50">
                                            {/* Office Image */}
                                            <div className="relative w-[280px] h-[180px]">
                                                <Image
                                                    src={country.office}
                                                    alt={`Oficina de ${country.name}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Country Info Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                                                <h4 className="font-semibold text-white mb-1">{country.name}</h4>
                                                <div className="flex justify-between items-center text-xs">
                                                    {country.employees && (
                                                        <span className="text-white/90">
                                                            <span className="font-medium text-primary-foreground">{country.employees}</span> {t('globalPresence.employees')}
                                                        </span>
                                                    )}
                                                    {country.established && (
                                                        <span className="text-white/70">
                                                            {t('globalPresence.established')} {country.established}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Arrow pointing down */}
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45"></div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}

                    {/* Floating particles effect */}
                    {/* <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-primary/40 rounded-full"
                                style={{
                                    left: `${20 + (i * 10)}%`,
                                    top: `${30 + (i * 5)}%`,
                                }}
                                animate={{
                                    y: [-10, 10, -10],
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                }}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    );
};
