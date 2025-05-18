import { ReactElement, useState } from "react"



export function useMultiForm(step:ReactElement[]) {

    const [currentStep, setCurrentStep] = useState(0)

    const next = () => {
        if (currentStep >= step.length) {
            return currentStep
        }

        return setCurrentStep(currentStep + 1)
    }

    const prev = () => {
        if (currentStep <= 0) {
            return currentStep
        }

        return setCurrentStep(currentStep - 1)
    }

    return {
        next,
        prev,
        currentStep,
        step,
        onStep : step[currentStep],
        isFirstStep: currentStep === 0,
        isLastStep : currentStep >= step.length - 1
    }
}