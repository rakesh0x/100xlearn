import axios from "axios";
import { response } from "express";
import React from "react";
import { useState, useEffect } from "react";
import confetti from 'react-confetti'
import { useWindowSize } from 'react-use';

const ButtonEffect = () => {
    const { width , height } = useWindowSize();
    const [ selectedoption, setSelectedoption ] = useState(null);
    const [ correctoption, setCorrectoption ] = useState(false);
    const [ incorrectoption, setIncorrectoption ] = useState(false);

    useEffect(() =>  {
        const fetchOptions = async () => {
            try {
                const response = axios.get (
                    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
                )
                const Correctoptions = response.data.results.map( (q) => [
                    q.correct_answer
                ]);

                setCorrectoption(correctoption)

                const Incorrectoptions = response.data.results.map( (q) => [
                    ...q.incorrect_answers
                ]);
                setIncorrectoption(incorrectoption)

            } catch (error) {
                console.log("error fetching the options :" , error)
            } 
        } 
        fetchOptions();
    }, []);

    




}
