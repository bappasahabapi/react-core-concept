export default function BoilingVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return (
      <>
        <p>The Water <b>would boil </b> </p>
      </>
    );
  }else{ 
  return (
    <div>
      <p>The Water <b>would not </b> boil because of less than temp is 100</p>
    </div>
  );
}
}
