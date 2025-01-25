import React from "react";

export function QuizzesPage() {

  return (
    <>
      <Header/>
      <Menubar/>
    </>
  )
}


const Header = () => {
  return <div className="text-center mt-8 text-xl">
    <h1>Quizes</h1>
  </div>;
};

const Menubar =  () =>  {
  return <div className="text-center w-10 h-52 justify-start">
    Subject
  </div>
}