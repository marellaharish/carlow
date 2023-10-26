import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faDollar } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select'
import './CalcViewA.css'
import { useState, useEffect } from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import CurrencyInput from 'react-currency-input-field';
const programNames = require("../data/calcA.json");

function CalcViewA() {
    const [selectedprogram,setSelectedprogram] = useState('');
    const [credits, setCredits] = useState(0);
    const [creditvalue, setCreditvalue] = useState('');
    const [finAssis, setFinAssis] = useState('');
    const [feesValue, setFeesValue] = useState(0);
    const [reqCredits, setReqCredits] = useState(0);
    const [programCost, setProgramCost] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [selectedVal, setSelectedVal] = useState("");
    const [maxCredits, setMaxCredits] = useState(0);
    const [costPerCredit, setCostPerCredit] = useState(0);
    const [showFirstPage, setShowFirstPage] = useState(true);
    const [ showReqInfo, setShowReqInfo] = useState(false);
    const [showThanksPage, setShowThanksPage] = useState(false);

    let finToolValue = "Input the total amount of desired or anticipated financial aid you expect to receive to offset total tuition costs.";
    let credValue = "Input the total amount of credits you'd like to transfer. We assess transfer credits on a case-by-case basis. Contact an enrollment team member for more information.";

    const onCreditKeyUP = (evt) => {
        let val = (evt.target.validity.valid) ? evt.target.value : creditvalue;
        if (Number(val) > Number(maxCredits)) {
            evt.preventDefault();
            setCreditvalue(0);
            setCredits(0);
            let total = programCost - 0 - finAssis;
            setTotalValue(total);
        }
    }
    const onCreditsChange = (evt) => {
        let val = (evt.target.validity.valid) ? evt.target.value : creditvalue;
        setCreditvalue(val)
        let credts = Number(val) * costPerCredit
        setCredits(credts);
        if (val) {

            let total = programCost - credts - finAssis;
            setTotalValue(total)
        }
    }

    const onFinChange = (value) => {
        let val = value;
        setFinAssis(val);
        if (val) {
            let total = programCost - credits - val;
            setTotalValue(total)
        }
    }

    const onProgramChange = (e) => {
        
        let value = JSON.parse(e.value);
        setSelectedprogram(e);
        let pCost = (Number(value.requiredCredits) * Number(value.costPerCredit)) + Number(value.fees)
        setFeesValue(value.fees);
        setReqCredits(value.requiredCredits);
        setMaxCredits(value.maxCredits);
        setFinAssis('');
        setCreditvalue('');
        setCredits(0);
        setCostPerCredit(value.costPerCredit);
        setProgramCost(pCost)
        //let total = pCost - credits - finAssis;
        setTotalValue(pCost)
    }

    const onRequestInfo=(e)=>{
        setShowFirstPage(false)
        setShowReqInfo(true);
        setShowThanksPage(false);
    }

    const onRequestSubmit=(e)=>{
        setShowFirstPage(false)
        setShowReqInfo(false);
        setShowThanksPage(true);

    }

    return (
        <div className="calc-center-view">
           {showFirstPage?<div>
                <div className="calc-title">Tuition Calculator</div>
                <div className='calc-desc'>
                    <div>Are you looking to estimate your total out-of-pocket cost, including tuition, fees and financial aid? Our tuition calculator can help.<span className='calc-imp'>*</span></div>
                    <div>At Carlow University, we’re committed to offering affordable, accessible and high-quality online degree programs. We also believe in transparency, avoiding hidden costs and fees whenever possible.<span className='calc-imp'>**</span></div>
                    <div>To get started, select your desired program. Stuck on something? Click on the information icons for additional context.</div>
                </div>
                <div className='calc-cnt'>
                    <div className='calc-body'>
                        <div className='input-cnt'>
                            <div className='calc-subtitle'>Estimate Your Tuition Cost</div>
                            <div className='inputcalc-view'>
                                <div className='calc-field'>
                                    <div className='calc-field-lbl'>Program {/*<div className='tooltip1'><FontAwesomeIcon className="calc-info" icon={faInfoCircle} /><TooltipContent1 /></div> */}</div>
                                    <div className='calc-fiel-txt-cnt'>
                                        
                                        <Select options={programNames} className='calc-field-txt calc-grp-select' onChange={onProgramChange} />

                                    </div>
                                </div>
                                <div className='calc-field'>
                                    <div className='calc-field-lbl'>Transfer Credits (Max {maxCredits})<div className='tooltip2'><FontAwesomeIcon data-tooltip-id="fintooltip" data-tooltip-content={credValue} className="calc-info" icon={faInfoCircle} /></div></div>
                                    <div className='calc-fiel-txt-cnt'>
                                        <input type="text" pattern="[0-9]*" value={creditvalue} onInput={onCreditsChange} onKeyUp={onCreditKeyUP} className='calc-field-txt calc-field-input' />

                                    </div>
                                </div>
                                <div className='calc-field'>
                                    <div className='calc-field-doller'>Financial Assistance<div className='tooltip3'><FontAwesomeIcon className="calc-info2" data-tooltip-id="fintooltip" data-tooltip-content={finToolValue} icon={faInfoCircle} /></div></div>
                                    <div className='calc-fiel-txt-cnt'>
                                        <div className='calc-field-txt clc-field-cont'>
                                       
                                        <FontAwesomeIcon className="fin-icon" icon={faDollar} />
                                        {/* <input type="text" pattern="[0-9]*" value={finAssis} onInput={onFinChange} className='calc-field-fin' min="1" /> */}
                                        <CurrencyInput  value={finAssis} onValueChange={onFinChange} className='calc-field-fin' />
                                    </div>
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='value-cnt'>
                            <div className='inner-valuecnt'>
                                <div className='val-field'><div className='val-lbl'>Cost <div className='calcfield-info'>{reqCredits} credits x ${costPerCredit} per credit<br />Fees ${feesValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div></div><div className='val-val possitive-val'>${programCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div></div>
                                <div className='val-field'><div className='val-lbl'>Transfer Credits Value<div className='calcfield-info'>{creditvalue} credits x ${costPerCredit} per credit</div></div><div className='val-val negative-val'>-${credits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div></div>
                                <div className='val-field'><div className='val-lbl'>Financial Assistance</div><div className='val-val negative-val'>-${finAssis ? finAssis.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0'}</div></div>
                                <div className='val-field est-field'><div className='val-lbl'>Estimated Cost</div><div className='val-val est-val'>${totalValue && totalValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div></div>
                            </div>
                            <div><center><div className='req-info' onClick={onRequestInfo}>REQUEST INFO</div></center></div>
                        </div>
                    </div>

                </div>
                <div className='calc-footer'>
                    <div className='footer-note'><span className='calc-imp'>*</span>The Tuition Calculator is based on programmatic information and student-generated inputs. All financial calculations should be taken as potential estimations and not actuals. To get a more accurate sense of total tuition, please consult with an enrolment team member.</div>
                    <div className='footer-note'><span className='calc-imp'>**</span>The financial calculations for the RN-BSN and Respiratory Care, B.S. programs are estimations based on the minimum amount of credits needed for each program. The total tuition cost is subject to increase dependent on the amount of transfer credits accepted.</div>

                </div>
                <ReactTooltip id="fintooltip"  openOnClick={true}  className='fin-tool-cls' classNameArrow='tool-arrow' />
            </div>:<></>}
            {showReqInfo? <RequestInfo  selectedprogram={selectedprogram} onRequestSubmit={onRequestSubmit}/>:<></>}
            {showThanksPage?<div className='thanks-main'><center>
                <div className='thanks-title'>Thank you for your interest</div>
                <div className='thanks-body'>Congratulations on taking the first steps toward your educational and professional goals !</div>
            </center>
            </div>:<></>}
        </div>

    )
}

function RequestInfo({selectedprogram, onRequestSubmit}){
    const onConfirm=(e)=>{
        let opacity;
        if(e.target.checked){
            opacity=1;
        }else{
            opacity=0.3;
        }
        document.getElementsByClassName('submit-btn')[0].style.opacity = opacity;
    }
    return (
        <div className='req-info-flex'>
            <div className='req-flex-cnt'>
                <div className='calc-req-subtitle'>Request information</div>
                <div className='calc-req-content'>We’d love to hear from you. Fill out the form, and we’ll be in touch shortly to learn more about your goals and how we can help.</div>
                <div className='calc-req-msg1'>ALL FIELDS REQUIRED</div>
            </div>

            <div className='req-flex-cnt-right'>
                <div className='inputcalc-view2'>
                    <div className='calc-field-select'>
                        <div className='calc-field-lbl2'>Select a Program </div>
                        <div className='calc-fiel-txt-cnt'>
                            <Select className='calc-field-txt calc-grp-select' defaultInputValue={selectedprogram.label} defaultValue={selectedprogram.value} options={programNames}  />

                        </div>
                    </div>
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
                        <input id="confirm_id" type="checkbox" name="confirmation" onChange={onConfirm}/>
                        <label htmlFor="confirm_id" className='confirm-label'>I authorise University and its representatives to contact me via SMS. I am providing my consent by leaving the opt-in checked. Message and data rates may apply. Terms.</label>
                    </div>
                    <div><center><div className='req-info submit-btn' onClick={onRequestSubmit}>SUBMIT</div></center></div>
                </div>
            </div>
        </div>
    )
}
export default CalcViewA;