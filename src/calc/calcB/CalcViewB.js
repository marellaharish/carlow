import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faDollar } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select'
import './CalcViewB.css'
import { useState, useEffect } from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import CurrencyInput from 'react-currency-input-field';
const programNames = require("../data/calcA.json");

function CalcViewB() {
    const [credits, setCredits] = useState(0);
    const [validCredit, setValidCredit] = useState(false)
    const [creditvalue, setCreditvalue] = useState('');
    const [finAssis, setFinAssis] = useState('');
    const [finVal, setFinVal] = useState('');
    const [scholVal, setScholVal] = useState('');
    const [feesValue, setFeesValue] = useState(0);
    const [reqCredits, setReqCredits] = useState(0);
    const [programCost, setProgramCost] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [selectedVal, setSelectedVal] = useState("");
    const [currentStep, setCurrentStep] = useState(1);
    const [maxCredits, setMaxCredits] = useState(0);
    const [costPerCredit, setCostPerCredit] = useState(0);
    const [showThanksView, setShowThanksView] = useState(false);
    let finToolValue = "Input the total amount of desired or anticipated financial aid you expect to receive to offset total tuition costs.";
    let scholValue = "Input the total amount of desired or anticipated scholarships you expect to receive to offset total tuition costs.";
    let credValue = "Input the total amount of credits you'd like to transfer. We assess transfer credits on a case-by-case basis. Contact an enrollment team member for more information.";


    const onCreditsChange = (evt) => {
        let val = (evt.target.validity.valid) ? evt.target.value : creditvalue;
        setCreditvalue(val)
        let credts = Number(val) * costPerCredit
        setCredits(credts);
        if (val) {
            let total = programCost - credts - finAssis - scholVal;
            setTotalValue(total)
        }
    }
    const onScholChange = (value) => {
        let val = value;
        let fValue = finAssis ? Number(finAssis) : 0;
        let cValue = credits ? Number(credits) : 0;
        setScholVal(val);
        let total = programCost - cValue - fValue
        if (val) {
            total = total - val;
            setFinVal(fValue + Number(val));
        } else {
            setFinVal(fValue);
        }
        setTotalValue(total)
    }

    const onFinChange = (value) => {
        let val = value
        let total;
        let sValue = scholVal ? Number(scholVal) : 0;
        setFinAssis(val);
        if (val) {
            total = programCost - credits - val - sValue;
            setFinVal(sValue + Number(val));
        } else {
            total = programCost - credits - sValue;
            setFinVal(sValue);
        }
        setTotalValue(total)
    }

    const onCreditKeyUP = (evt) => {
        let val = (evt.target.validity.valid) ? evt.target.value : creditvalue;

        if (Number(val) > Number(maxCredits)) {
            evt.preventDefault();
            setCreditvalue('');
            setCredits(0);
            let total = programCost - 0 - finAssis - scholVal;
            setTotalValue(total);
            setValidCredit(true);
        } else {
            setValidCredit(false);
        }
    }

    const onProgramChange = (e) => {
        setValidCredit(false);
        document.getElementsByClassName('req-next')[0].style.opacity = 1;
        document.getElementsByClassName('mnext')[0].style.opacity = 1;
        let value = JSON.parse(e.value);
        let pCost = (Number(value.requiredCredits) * Number(value.costPerCredit)) + Number(value.fees)
        setFeesValue(value.fees);
        setReqCredits(value.requiredCredits);
        setMaxCredits(value.maxCredits);
        setFinAssis('');
        setFinVal('');
        setScholVal('');
        setCreditvalue('');
        setCredits(0);
        setCostPerCredit(value.costPerCredit);
        setProgramCost(pCost);
        setTotalValue(pCost)
    }

    const onBack = (e) => {
        if (currentStep == 2) {
            onStep1();
        } else
            if (currentStep == 3) {
                onStep2();
            }
        window.scrollTo(0, 0);
    }

    const onNext = (e) => {
        if (programCost == undefined || programCost == 0) {
            return
        }
        if (currentStep == 1) {
            onStep2();
        } else
            if (currentStep == 2) {
                onStep3();
            }
        window.scrollTo(0, 0);
    }
    const setStepSelectedStyle = (val1, val2, val3) => {
        document.getElementById(val1).classList.remove('step-selected');
        document.getElementById(val2).classList.remove('step-selected');
        document.getElementById(val3).classList.add('step-selected');
    }
    const setStepStyle = (step1, step2, step3) => {
        document.getElementById("step1").style.display = step1;
        document.getElementById("step2").style.display = step2;
        document.getElementById("step3").style.display = step3;
    }
    const onStep1 = (e) => {
        setCurrentStep(1);
        setStepStyle('block', 'none', 'none');
        setStepSelectedStyle('step2-ind', 'step3-ind', 'step1-ind');
        let backbtns = document.getElementsByClassName("req-back");
        for (var i = 0; i < backbtns.length; i++) {
            backbtns[i].style.display = 'none';
        }
        let nextbtns = document.getElementsByClassName("req-next");
        for (var j = 0; j < nextbtns.length; j++) {
            nextbtns[j].style.display = 'block';
        }
    }

    const onStep2 = (e) => {
        if (programCost == undefined || programCost == 0) {
            return
        }
        setCurrentStep(2);
        setStepStyle('none', 'block', 'none');
        setStepSelectedStyle('step1-ind', 'step3-ind', 'step2-ind');
        let backbtns = document.getElementsByClassName("req-back");
        for (var i = 0; i < backbtns.length; i++) {
            backbtns[i].style.display = 'block';
        }
        let nextbtns = document.getElementsByClassName("req-next");
        for (var j = 0; j < nextbtns.length; j++) {
            nextbtns[j].style.display = 'block';
        }
    }

    const onStep3 = (e) => {
        if (programCost == undefined || programCost == 0) {
            return
        }
        setCurrentStep(3);
        setStepStyle('none', 'none', 'block');
        setStepSelectedStyle('step1-ind', 'step2-ind', 'step3-ind');
        let backbtns = document.getElementsByClassName("req-back");
        for (var i = 0; i < backbtns.length; i++) {
            backbtns[i].style.display = 'block';
        }
        let nextbtns = document.getElementsByClassName("req-next");
        for (var j = 0; j < nextbtns.length; j++) {
            nextbtns[j].style.display = 'none';
        }
    }

    const onSubmitRequest= (e)=>{
        setShowThanksView(true);
    }

    const onConfirm = (e) =>{
        let opacity;
        if(e.target.checked){
            opacity=1;
        }else{
            opacity=0.3;
        }
        document.getElementsByClassName('submit-btn')[0].style.opacity = opacity;
    }

    return (
        <div>
            {!showThanksView ? <div className="calc-center-view">

                <div className="calc-title">Tuition Calculator</div>
                <div className='calc-desc'>
                    <div>Are you looking to estimate your total out-of-pocket cost, including tuition, fees and financial aid? Our tuition calculator can help.<span className='calc-imp'>*</span></div>
                    <div>At Carlow University, we’re committed to offering affordable, accessible and high-quality online degree programs. We also believe in transparency, avoiding hidden costs and fees whenever possible.<span className='calc-imp'>**</span></div>
                    <div>To get started, select your desired program. Stuck on something? Click on the information icons for additional context.</div>
                </div>
                <div className='calc-cnt'>
                    <div className='calc-body'>
                        <div className='input-cnt'>
                            <div className='steps-cnt1'>
                                <div className='step-item'>
                                    <div><center><div id="step1-ind" className='step-action step-selected' onClick={onStep1}>1</div></center></div>
                                    {/* <div>Estimate your Tution cost</div> */}
                                </div>
                                <div className='hr-cls' />
                                <div className='step-item'>
                                    <div><center><div id="step2-ind" className='step-action' onClick={onStep2}>2</div></center></div>
                                    {/* <div>Financial Assistance</div> */}
                                </div>
                                <div className='hr-cls' />
                                <div className='step-item'>
                                    <div><center><div className='step-action' id="step3-ind" onClick={onStep3}>3</div></center></div>
                                    {/* <div>Request Information</div> */}
                                </div>
                            </div>
                            <div className='steps-cnt2'>
                                <div className='step-item stepdesccls1'>
                                    <div>Estimate your Tution cost</div>
                                </div>
                                <div className='hr-cls2' />
                                <div className='step-item stepdesccls2'>
                                    <div>Financial Assistance</div>
                                </div>
                                <div className='hr-cls2 ' />
                                <div className='step-item stepdesccls3'>
                                    <div>Request Information</div>
                                </div>
                            </div>
                            <div>
                                <div id='step1' className='step1Cls'>
                                    <div className='calc-subtitle'>Estimate Your Tuition Cost</div>
                                    <div className='inputcalc-view'>
                                        <div className='calc-fieldb'>
                                            <div className='calc-field-lbl'>Program {/*<div className='tooltip1'><FontAwesomeIcon className="calc-info" icon={faInfoCircle} /><TooltipContent1 /></div>*/}</div>
                                            <div className='calc-fiel-txt-cnt'>
                                                <Select options={programNames} className='calc-field-txt calc-grp-select' onChange={onProgramChange} />
                                            </div>
                                        </div>
                                        <div className='calc-fieldb'>
                                            <div className='calc-field-lbl'>Transfer Credits (Max {maxCredits})<div className='tooltip2'><FontAwesomeIcon className="calc-info" icon={faInfoCircle} data-tooltip-id="fintooltip" data-tooltip-content={credValue} /></div></div>
                                            <div className='calc-fiel-txt-cnt'>
                                                <input type="text" pattern="[0-9]*" value={creditvalue} onInput={onCreditsChange} onKeyUp={onCreditKeyUP} className='calc-field-txt calc-field-input' />
                                            </div>
                                        </div>
                                        {validCredit ? <div className='validation-error'>Please enter the value not more than {maxCredits} </div> : <></>}
                                    </div>
                                </div>
                                <div id='step2' className='step2Cls'>
                                    <div className='calc-subtitle'>Financial Assistance</div>
                                    <div className='inputcalc-view'>
                                        <div className='calc-fieldb'>
                                            <div className='calc-field-doller'>Financial Aid<div className='tooltip3'><FontAwesomeIcon className="calc-info" icon={faInfoCircle} data-tooltip-id="fintooltip" data-tooltip-content={finToolValue} /></div></div>
                                            <div className='calc-fiel-txt-cnt'>

                                                <div className='calc-field-txt clc-field-cont'>
                                                    <FontAwesomeIcon className="fin-icon" icon={faDollar} />
                                                    <CurrencyInput value={finAssis} onValueChange={onFinChange} className='calc-field-fin' />
                                                </div>

                                            </div>
                                        </div>
                                        <div className='calc-fieldb'>
                                            <div className='calc-field-doller'>Scholarships<div className='tooltip3'><FontAwesomeIcon className="calc-info" icon={faInfoCircle} data-tooltip-id="fintooltip" data-tooltip-content={scholValue} /></div></div>
                                            <div className='calc-fiel-txt-cnt'>
                                                <div className='calc-field-txt clc-field-cont'>
                                                    <FontAwesomeIcon className="fin-icon" icon={faDollar} />
                                                    <CurrencyInput value={scholVal} onValueChange={onScholChange} className='calc-field-fin' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id='step3' className='step3Cls'>
                                    <div className='calc-subtitle'>Request information</div>
                                    <div className='inputcalc-view'>
                                        <div className="calc-field-cnt">
                                            <div className='calc-field2'>
                                                <div className='calc-field-lbl2'>First name</div>
                                                <div className='calc-fiel-txt-cnt'>
                                                    <input type="text" className='calc-field-txt' />
                                                </div>
                                            </div>
                                            <div className='calc-field2'>
                                                <div className='calc-field-lbl2'>Last name</div>
                                                <div className='calc-fiel-txt-cnt'>
                                                    <input type="text" className='calc-field-txt' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='calc-field2'>
                                            <div className='calc-field-lbl2'>Email</div>
                                            <div className='calc-fiel-txt-cnt'>
                                                <input type="text" className='calc-field-txt' />
                                            </div>
                                        </div>
                                        <div className="calc-field-cnt">
                                            <div className='calc-field2'>
                                                <div className='calc-field-lbl2'>Phone Number</div>
                                                <div className='calc-fiel-txt-cnt'>
                                                    <input type="text" className='calc-field-txt' />
                                                </div>
                                            </div>
                                            <div className='calc-field2'>
                                                <div className='calc-field-lbl2'>Zip Code</div>
                                                <div className='calc-fiel-txt-cnt'>
                                                    <input type="text" className='calc-field-txt' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='confirm-cnt'>
                                            <input id="confirm_id" type="checkbox" name="confirmation" onChange={onConfirm} />
                                            <label htmlFor="confirm_id" className='confirm-label'>I authorise University and its representatives to contact me via SMS. I am providing my consent by leaving the opt-in checked. Message and data rates may apply. Terms.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='step2btncnt'><div className='req-back' id='backBtnId' onClick={onBack}>Back</div><div className='seperator'></div><div className='req-next' onClick={onNext} id='nextBtnId'>Next</div></div>

                        </div>
                        <div className='value-cnt'>
                            <div className='inner-valuecnt'>
                                <div className='val-field'><div className='val-lbl'>Cost <div className='calcfield-info'>{reqCredits} credits x ${costPerCredit} per credit<br />Fees ${feesValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div></div><div className='val-val possitive-val'>${programCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div></div>
                                <div className='val-field'><div className='val-lbl'>Transfer Credits Value<div className='calcfield-info'>{creditvalue} credits x ${costPerCredit} per credit</div></div><div className='val-val negative-val'>-${credits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div></div>
                                <div className='val-field'><div className='val-lbl'>Financial Assistance</div><div className='val-val negative-val'>-${finVal ? finVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0'}</div></div>
                                <div className='val-field est-field'><div className='val-lbl'>Estimated Cost</div><div className='val-val est-val'>${totalValue && totalValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div></div>
                            </div>
                            <div className='mbtn-cnt'>
                                <div><center><div className='req-back mback' id='backBtnId' onClick={onBack}>Back</div></center></div>
                                <div><center><div className='req-next mnext' id='nextBtnId' onClick={onNext}>Next</div></center></div>
                            </div>
                            {currentStep!==3?<div><center><div className='req-info2' onClick={onStep3}>REQUEST INFO</div></center></div>:<></>}
                            {currentStep===3?<div><center><div className='req-info2 submit-btn' onClick={onSubmitRequest}>SUBMIT</div></center></div>:<></>}
                        </div>
                    </div>

                </div>

                <div className='calc-footer'>
                    <div className='footer-note'><span className='calc-imp'>*</span>The Tuition Calculator is based on programmatic information and student-generated inputs. All financial calculations should be taken as potential estimations and not actuals. To get a more accurate sense of total tuition, please consult with an enrolment team member.</div>
                    <div className='footer-note'><span className='calc-imp'>**</span>The financial calculations for the RN-BSN and Respiratory Care, B.S. programs are estimations based on the minimum amount of credits needed for each program. The total tuition cost is subject to increase dependent on the amount of transfer credits accepted.</div>

                </div>
                <ReactTooltip id="fintooltip" className='fin-tool-cls' classNameArrow='tool-arrow' />
            </div> : <></>}
            {showThanksView ? <div className='thanks-main'><center>
                <div className='thanks-title'>Thank you for your interest</div>
                <div className='thanks-body'>Congratulations on taking the first steps toward your educational and professional goals !</div>
            </center>
            </div> : <></>}
        </div>
    )
}


export default CalcViewB;