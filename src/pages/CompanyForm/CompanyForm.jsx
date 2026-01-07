import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import styles from "./CompanyForm.module.scss";


const CompanyForm = () => {
  const [step, setStep] = useState(1);

  const next = () => setStep(prev => prev + 1);
  const back = () => setStep(prev => prev - 1);

  const submit = async () => {


    const success = true
    if (success) {
      setStep(4);
    } else {
      alert("Error try again");
    }
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.title_container}>
        <h2>Need a Custom Experience?</h2>
        <p>
          We provide custom travel experiences and event planning services for
          corporate clients in Hamburg. Please complete the following form with
          all the available information and we will contact you with a tailored
          proposition.
        </p>
      </div>

      <div className={styles.content_container}>
        {step === 1 && <Step1 next={next} />}
        {step === 2 && <Step2 next={next} back={back} />}
        {step === 3 && <Step3 back={back} submit={submit} />}
        {step === 4 && <Step4 back={back} submit={submit} />}
      </div>
    </div>
  );
};

export default CompanyForm;
