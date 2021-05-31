import { FormControl, ValidatorFn } from "@angular/forms";
import { AfterViewInit } from "@angular/core";

export class Utility {

    constructor() { }

    static validarCPF(strCPF: string): boolean {

        if (strCPF) {

            strCPF = strCPF.replace(/[^\d]+/g, '');

            if (strCPF.length != 11)
                return false;

            let igual = true;

            for (let i = 1; i < 11 && igual; i++) {
                if (strCPF[i] != strCPF[0])
                    igual = false;
            }

            if (igual || strCPF == "12345678909")
                return false;

            let numeros: number[] = [];

            for (let i = 0; i < 11; i++) {
                numeros[i] = +strCPF[i];
            }

            let soma = 0;
            for (let i = 0; i < 9; i++) {
                soma += (10 - i) * numeros[i];
            }

            let resultado = soma % 11;

            if (resultado == 1 || resultado == 0) {
                if (numeros[9] != 0)
                    return false;
            }
            else if (numeros[9] != 11 - resultado)
                return false;

            soma = 0;
            for (let i = 0; i < 10; i++) {
                soma += (11 - i) * numeros[i];
            }

            resultado = soma % 11;
            if (resultado == 1 || resultado == 0) {
                if (numeros[10] != 0)
                    return false;
            }
            else {
                if (numeros[10] != 11 - resultado)
                    return false;
            }

            return true;
        } else return true;
    };
    static validarCNPJ(cnpj: string): boolean {

        if (cnpj) {

            cnpj = cnpj.replace(/[^\d]+/g, '');

            if (cnpj == '') return false;

            if (cnpj.length != 14)
                return false;

            // Elimina CNPJs invalidos conhecidos
            if (cnpj == "00000000000000" ||
                cnpj == "11111111111111" ||
                cnpj == "22222222222222" ||
                cnpj == "33333333333333" ||
                cnpj == "44444444444444" ||
                cnpj == "55555555555555" ||
                cnpj == "66666666666666" ||
                cnpj == "77777777777777" ||
                cnpj == "88888888888888" ||
                cnpj == "99999999999999")
                return false;

            // Valida DVs
            let tamanho: number = cnpj.length - 2;
            let numeros: string = cnpj.substring(0, tamanho);
            let digitos: string = cnpj.substring(tamanho);
            let soma: number = 0;
            let pos: number = tamanho - 7;

            for (var i = tamanho; i >= 1; i--) {
                soma += +numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }

            let resultado: number = soma % 11 < 2 ? 0 : 11 - soma % 11;

            if (resultado != +digitos.charAt(0))
                return false;

            tamanho = tamanho + 1;
            numeros = cnpj.substring(0, tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
                soma += +numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != +digitos.charAt(1))
                return false;

            return true;
        } else return true;
    }
}

export function PasswordValidator(control: FormControl): { [key: string]: boolean } | null {

    let hasNumber = /\d/.test(control.value);
    let hasUpper = /[A-Z]/.test(control.value);
    let hasLower = /[a-z]/.test(control.value);
    let hasSpecial = /[!@#$%¨&*()_=+]/.test(control.value);
    const valid = hasNumber && hasUpper && hasLower && control.value.length > 7 && hasSpecial;
    if (!valid) {
        return { "invalidpassword": true };
    }
    return null;
}

export function CPFValidator(control: FormControl): { [key: string]: boolean } | null {

    //if (control.value.length < 11)
    //    return null;

    var retorno: boolean = Utility.validarCPF(control.value);

    return !retorno ? {
        "cpfinvalido": true
    } : null;
}

export function CNPJValidator(control: FormControl): { [key: string]: boolean } | null {

    var retorno: boolean = Utility.validarCNPJ(control.value);

    return !retorno ? {
        "cnpjinvalido": true
    } : null;
}

export function ComparisonValidator(confirmField: string): ValidatorFn {
    return (control: FormControl): { [key: string]: boolean } | null => {

        if (control.parent) {
            let confirmFieldValue = control.parent.get(confirmField).value;

            if (control.value !== confirmFieldValue)
                return { "comparisonerror": true }
            else
                return null;
        }

        return null;
    }
}

export abstract class AbstractComponent implements AfterViewInit{

    constructor() { }

    ngAfterViewInit() {
        if (document.getElementsByTagName) {
            let inputElements = document.getElementsByTagName("input");
            for (var i = 0; inputElements[i]; i++) {
                inputElements[i].setAttribute("autocomplete", "off");
            }
        }
    }
}
