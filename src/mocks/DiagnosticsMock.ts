import { v4 as uuidv4 } from "uuid";
import { FAULT_TYPE_OPTIONS, SEVERITY_OPTIONS } from "../consts/consts";
import type { DiagnosticType, Severity } from "../types/types";

export const mockDiagnostics: DiagnosticType[] = [
    {
        id: uuidv4(),
        date: new Date('05-15-2025'),
        faultType: FAULT_TYPE_OPTIONS.DETERIORATION,
        severity: SEVERITY_OPTIONS.MEDIUM as Severity
    },
    {
        id: uuidv4(),
        date: new Date('05-16-2025'),
        faultType: FAULT_TYPE_OPTIONS.LOOSENESS,
        severity: SEVERITY_OPTIONS.HIGH as Severity
    },
    {
        id: uuidv4(),
        date: new Date('05-16-2025'),
        faultType: FAULT_TYPE_OPTIONS.LOOSENESS,
        severity: SEVERITY_OPTIONS.CRITICAL as Severity
    },
    {
        id: uuidv4(),
        date: new Date('05-18-2025'),
        faultType: FAULT_TYPE_OPTIONS.DETERIORATION,
        severity: SEVERITY_OPTIONS.LOW as Severity
    },
    {
        id: uuidv4(),
        date: new Date('05-17-2025'),
        faultType: FAULT_TYPE_OPTIONS.DETERIORATION,
        severity: SEVERITY_OPTIONS.CRITICAL as Severity
    }
]