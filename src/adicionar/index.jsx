import React from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./adicionar.css"
import { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { useFormik } from 'formik';
import { Menubar } from 'primereact/menubar';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { margin } from '@mui/system';

// caro vine, vou por o link da documentacao aqui do prime pra vc olhar as paradas de pegar os valores dos campos e radio botao:
// https://www.primefaces.org/primereact/
// estava mto legal fazer isso mas tenho que ver umas paradas de xamarin
// Att., Bruna SZ

const Adicionar = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});

    const items = [{
        label: "Voltar",
        icon: "pi pi-chevron-left",
        url: 'http://localhost:3000/store'
    }]

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            date: null,
            accept: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Campo obrigatório.';
            }


            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);

            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div>
            <div className="card" style={{}}>
                <Menubar className='card2' model={items} style={{ border: 0, borderRadius: 0 }} />
            </div>
            <div className="form-demo">
                <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="flex align-items-center flex-column pt-6 px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Registration Successful!</h5>
                        <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                            Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                        </p>
                    </div>
                </Dialog>

                <div className="flex justify-content-center">
                    <div className="card">
                        <h3 className="text-center">CADASTRO DE PRODUTOS</h3>
                        <form onSubmit={formik.handleSubmit} className="p-fluid">
                            <div className="field">
                                <span className="p-float-label">
                                    <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                    <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Nome do produto*</label>
                                </span>
                                {getFormErrorMessage('name')}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <InputText id="descricao" name="descricao" value={formik.values.descricao} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                    <label htmlFor="descricao" className={classNames({ 'p-error': isFormFieldValid('name') })}>Descrição*</label>
                                </span>
                                {getFormErrorMessage('name')}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                <InputNumber className={classNames({ 'p-invalid': isFormFieldValid('name') })} min={0} required showButtons mode="currency" currency="BRL" />
                                    <label htmlFor="preco" className={classNames({ 'p-error': isFormFieldValid('name') })}></label>
                                </span>
                                {getFormErrorMessage('name')}
                            </div>
                            <h5 className="text-center">À VENDA:</h5>
                            <div>
                                <span>
                                <RadioButton className={classNames({ 'p-invalid': isFormFieldValid('name') })} min={0} required showButtons mode="currency" currency="BRL" />
                                    <label htmlFor="preco" className={classNames({ 'p-error': isFormFieldValid('name') })}> Sim</label>

                                </span>
                                {getFormErrorMessage('name')}
                            </div>
                            <div style={{marginTop: "10px"}} >
                                <span>
                                <RadioButton className={classNames({ 'p-invalid': isFormFieldValid('name') })} name="venda"  value="val1" onChange={(e) => setValue(e.value)} />
                                    <label> Não</label>
                                </span>
                                {getFormErrorMessage('name')}
                            </div>
                            
                            <Button type="submit" label="Enviar" className="mt-2" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Adicionar