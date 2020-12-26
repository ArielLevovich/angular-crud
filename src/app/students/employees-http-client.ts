import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Employee } from './employee';
import { StudentsList } from './students-list';
import { StudentDetail } from './student-detail';
import { StudentDetailList } from './student-detail-list';
import { Response } from './response';
import { TableFilter } from '../table-filters/table-filter';

/* tslint:disable */
/**
 * Hardcoded student detail data that's used for the example application instead of making REST calls.
 */
const STUDENT_DETAILS: StudentDetail[] = [
    { termCreatedDate: '9/29/2017 11:51:18 AM', termDescription: 'Fall 2017 Upload 20', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/29/2017 11:47:15 AM', termDescription: 'Fall 2017 Upload 19', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/28/2017 11:51:18 AM', termDescription: 'Fall 2017 Upload 18', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/28/2017 11:47:15 AM', termDescription: 'Fall 2017 Upload 17', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/27/2017 11:51:18 AM', termDescription: 'Fall 2017 Upload 16', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/27/2017 11:47:15 AM', termDescription: 'Fall 2017 Upload 15', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/26/2017 11:51:18 AM', termDescription: 'Fall 2017 Upload 14', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/26/2017 11:47:15 AM', termDescription: 'Fall 2017 Upload 13', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/25/2017 11:51:18 AM', termDescription: 'Fall 2017 Upload 12', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/25/2017 11:47:15 AM', termDescription: 'Fall 2017 Upload 11', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/24/2017 11:51:18 AM', termDescription: 'Fall 2017 Upload 10', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/24/2017 11:47:15 AM', termDescription: 'Fall 2017 Upload 9', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/23/2017 11:51:18 AM', termDescription: 'Fall 2017 Upload 8', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/23/2017 11:47:15 AM', termDescription: 'Fall 2017 Upload 7', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/22/2017 11:51:18 AM', termDescription: 'Fall 2017 Upload 6', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/22/2017 11:47:15 AM', termDescription: 'Fall 2017 Upload 5', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/21/2017 11:51:18 AM', termDescription: 'Fall 2017 Upload 4', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/21/2017 11:47:15 AM', termDescription: 'Fall 2017 Upload 3', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/20/2017 11:51:18 AM', termDescription: 'Fall 2017 Upload 2', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 },
    { termCreatedDate: '9/20/2017 11:47:15 AM', termDescription: 'Fall 2017 Upload 1', applied: true, loansTotalAmount: 22587, attemptedHours: 102, earnedHours: 80, completionRate: 78.43, gpa: 2.6, financialAidStatus: 'Suspended', financialAidStatusProj: 'Suspended', enrolledHours: 0, droppedHours: 0, repeatedHours: 0, attemptedHoursProj: 102, completionRateProj: 78.43, gpaRequired: 0, addlHoursRequired: -11 }
];
/* tslint:enable */

/**
 * The class that makes REST calls to retrieve, add, update and delete students and student detail records.
 */
export class EmployeesHttpClient {

    /**
     * Hardcoded student data that's used for the example application instead of making REST calls.
     */
    EMPLOYEES: Employee[] = [
        { employeeId: 1, employee: 'M1000001', name: 'Ron', phone: '054-1234567', email: 'rb@sappro.com' },
        { employeeId: 2, employee: 'M1000002', name: 'Jari', phone: '054-1234568', email: 'jj@sappro.com' },
        { employeeId: 3, employee: 'M1000003', name: 'Steve', phone: '054-1234569', email: 'st@sappro.com' },
        { employeeId: 4, employee: 'M1000004', name: 'Betty', phone: '054-1234570', email: 'bc@sappro.com' },
        { employeeId: 5, employee: 'M1000005', name: 'Phil', phone: '054-1234571', email: 'pj@sappro.com' },
        { employeeId: 6, employee: 'M1000006', name: 'Trish', phone: '054-1234572', email: 'tw@sappro.com' },
        { employeeId: 7, employee: 'M1000007', name: 'Becky', phone: '054-1234573', email: 'bl@sappro.com' },
        { employeeId: 8, employee: 'M1000008', name: 'Ronda', phone: '054-1234574', email: 'rp@sappro.com' },
        { employeeId: 9, employee: 'M1000009', name: 'Denise', phone: '054-1234575', email: 'ds@sappro.com' },
        { employeeId: 10, employee: 'M1000010', name: 'Frank', phone: '054-1234576', email: 'fl@sappro.com' },
        { employeeId: 11, employee: 'M1000011', name: 'Eva', phone: '054-1234577', email: 'eg@sappro.com' },
        { employeeId: 12, employee: 'M1000012', name: 'James', phone: '054-1234578', email: 'js@sappro.com' },
        { employeeId: 13, employee: 'M1000013', name: 'Sam', phone: '054-1234579', email: 'sg@sappro.com' },
        { employeeId: 14, employee: 'M1000014', name: 'Hillary', phone: '054-1234580', email: 'hd@sappro.com' },
        { employeeId: 15, employee: 'M1000015', name: 'Simon', phone: '054-1234581', email: 'ss@sappro.com' },
        { employeeId: 16, employee: 'M1000016', name: 'Ray', phone: '054-1234582', email: 'rs@sappro.com' },
        { employeeId: 17, employee: 'M1000017', name: 'Luke', phone: '054-1234583', email: 'lh@sappro.com' },
        { employeeId: 18, employee: 'M1000018', name: 'Dave', phone: '054-1234584', email: 'dk@sappro.com' },
        { employeeId: 19, employee: 'M1000019', name: 'John', phone: '054-1234585', email: 'ja@sappro.com' },
        { employeeId: 20, employee: 'M1000020', name: 'Roland', phone: '054-1234586', email: 'jh@sappro.com' }
    ];

    constructor() { }

    /**
     * Returns students based on the sorting, paging and filtering parameters.
     *
     * @param sortColumn the column used to sort the results
     * @param sortDirection the sort direction ('asc' or 'desc')
     * @param pageIndex the page number to return
     * @param pageSize the page size
     * @param tableFilters the filters to apply
     */
    getStudents(sortColumn: string, sortDirection: string, pageIndex: number, pageSize: number, tableFilters: Map<string, TableFilter>):
        Observable<StudentsList> {

        // In a production application, the following logic would be replaced with a REST call!!!

        let studentsCopy: Employee[];
        if ((sortDirection === 'desc') || (sortDirection === 'asc')) {
            // Return the students sorted by the specified column and direction
            studentsCopy = this.EMPLOYEES.slice();
            studentsCopy = studentsCopy.sort(this.compareValues(sortColumn, sortDirection));
        } else {
            // Return the students in no particular order
            studentsCopy = this.EMPLOYEES.slice();
        }

        // Filter the students
        studentsCopy = studentsCopy.filter(this.filterStudents(tableFilters));
        const total: number = studentsCopy.length;

        const start = pageIndex * pageSize;
        const end = start + pageSize;
        studentsCopy = studentsCopy.slice(start, end);

        const studentsList: StudentsList = { students: studentsCopy, totalStudents: total };
        return of(studentsList).pipe(delay(500));
    }

    /**
     * Returns detail records for the passed in employeeId based on the sorting, paging and filtering parameters.
     *
     * @param studentId id of student to be retrieved
     * @param sortColumn the column used to sort the results
     * @param sortDirection the sort direction ('asc' or 'desc')
     * @param pageIndex the page number to return
     * @param pageSize the page size
     */
    getStudentDetail(studentId: number, sortColumn: string, sortDirection: string, pageIndex: number, pageSize: number):
        Observable<StudentDetailList> {

        // In a production application, the following logic would be replaced with a REST call!!!

        let studentDetailDeepCopy = JSON.parse(JSON.stringify(STUDENT_DETAILS));
        if ((sortDirection === 'desc') || (sortDirection === 'asc')) {
            // Return the students sorted by the specified column and direction
            studentDetailDeepCopy = studentDetailDeepCopy.sort(this.compareValues(sortColumn, sortDirection));
        }

        const start = pageIndex * pageSize;
        const end = start + pageSize;
        studentDetailDeepCopy = studentDetailDeepCopy.slice(start, end);

        // We'll set the loansTotalAmount to the employeeId * 1000 so we can verify the details are specific to the student
        studentDetailDeepCopy[0].loansTotalAmount = studentId * 1000;

        const studentDetailList: StudentDetailList = { details: studentDetailDeepCopy, totalDetails: STUDENT_DETAILS.length };
        return of(studentDetailList).pipe(delay(500));
    }

    /**
     * Updates the passed in student and returns the result of the update.
     *
     * @param student the student to update
     */
    updateStudent(student: Employee): Observable<Response> {

        // In a production application, the following logic would be replaced with a REST call!!!

        const rsp: Response = new Response();

        // Get the index of the student that is being updated
        const studentIndex: number = this.EMPLOYEES.findIndex(s => s.employeeId === student.employeeId);

        if (studentIndex === 0) {
            // Simulate an error for testing purposes
            rsp.success = false;
            rsp.error = 'Failed to update student, please try again!';
        } else {
            rsp.success = true;

            // Update the student
            this.EMPLOYEES[studentIndex] = student;
        }

        return of(rsp).pipe(delay(500));
    }

    /**
     * Adds the passed in student and returns the result of the add.
     *
     * @param student the student to add
     */
    addStudent(student: Employee): Observable<Response> {

        // In a production application, the following logic would be replaced with a REST call!!!

        const rsp: Response = new Response();

        if (student.employee === 'BAD') {
            // Simulate an error for testing purposes
            rsp.success = false;
            rsp.error = 'Failed to add student, please try again!';
        } else {
            rsp.success = true;

            student.employeeId = this.getNextStudentId();

            // Add the student
            this.EMPLOYEES.push(student);
        }

        return of(rsp).pipe(delay(500));
    }

    /**
     * Deletes the passed in student and returns the result of the delete.
     *
     * @param studentId the employeeId of the student to delete
     */
    deleteStudent(studentId: number): Observable<Response> {

        // In a production application, the following logic would be replaced with a REST call!!!

        const rsp: Response = new Response();

        // Get the index of the student that is being deleted
        const studentIndex: number = this.EMPLOYEES.findIndex(s => s.employeeId === studentId);

        if (studentIndex === 0) {
            // Simulate an error for testing purposes
            rsp.success = false;
            rsp.error = 'Failed to delete student, please try again!';
        } else {
            rsp.success = true;

            // Delete the student
            this.EMPLOYEES.splice(studentIndex, 1);
        }

        return of(rsp).pipe(delay(500));
    }

    /**
     * Deletes the passed in students and returns the result of the delete.
     *
     * @param studentIds the studentIds of the students to delete
     */
    deleteStudents(studentIds: number[]): Observable<Response> {

        // In a production application, the following logic would be replaced with a REST call!!!

        const rsp: Response = new Response();
        rsp.success = true;

        studentIds.forEach(studentId => {
            // Get the index of the student that is being delete
            const studentIndex: number = this.EMPLOYEES.findIndex(s => s.employeeId === studentId);

            // Delete the student
            this.EMPLOYEES.splice(studentIndex, 1);
        });

        return of(rsp).pipe(delay(500));
    }

    /**
     * Returns a response with success=true if the passed in student school id is not assigned to another student.
     *
     * @param studentId the student id that the student school id will be assigned to
     * @param studentSchoolId the student school id to validate
     */
    validateStudentSchoolId(studentId: number, studentSchoolId: string): Observable<Response> {

        // In a production application, the following logic would be replaced with a REST call!!!

        const rsp: Response = new Response();

        // Get the index of the student that is being validated
        const studentIndex: number = this.EMPLOYEES.findIndex(s => s.employeeId === studentId);

        // Get the index of any student that has the same student school id
        const studentMatchIndex: number = this.EMPLOYEES.findIndex(s => s.employee === studentSchoolId);
        if ((studentMatchIndex !== -1) && (studentMatchIndex !== studentIndex)) {
            rsp.success = false;
            rsp.error = 'Employee Id is already assigned';
        } else {
            rsp.success = true;
        }

        return of(rsp).pipe(delay(500));
    }

    /**
     * Returns a function that can be passed to the sort() function to sort values based on the passed in sortColumn and sortDirection.
     *
     * @param sortColumn the column to sort on
     * @param sortDirection the sort direction
     */
    compareValues(sortColumn: string, sortDirection: string) {
        return (a: Employee, b: Employee) => {
            if (!a.hasOwnProperty(sortColumn) || !b.hasOwnProperty(sortColumn)) {
                return 0;
            }
            const comparison = a[sortColumn].localeCompare(b[sortColumn]);

            return (
                (sortDirection === 'desc') ? (comparison * -1) : comparison
            );
        };
    }

    /**
     * Returns a function that can be passed to the filter() function to filter students based on the passed in filters.
     *
     * @param tableFilters the filters to apply to the students
     */
    filterStudents(tableFilters: Map<string, TableFilter>) {
        return (student: Employee) => {
            for (const [field, filter] of tableFilters) {
                let testValue: string;
                switch (field) {
                    case 'employeeId':
                        testValue = student.employee;
                        break;
                    case 'name':
                        testValue = student.name;
                        break;
                    case 'phone':
                        testValue = student.phone;
                        break;
                    case 'email':
                        testValue = student.email;
                        break;
                }

                switch (filter.operator) {
                    case 'Is equal to':
                        if (testValue !== filter.value) {
                            return false;
                        }
                        break;
                    case 'Is not equal to':
                        if (testValue === filter.value) {
                            return false;
                        }
                        break;
                    case 'Starts with':
                        if (!testValue.startsWith(filter.value)) {
                            return false;
                        }
                        break;
                    case 'Contains':
                        if (!testValue.includes(filter.value)) {
                            return false;
                        }
                        break;
                    case 'Does not contain':
                        if (testValue.includes(filter.value)) {
                            return false;
                        }
                        break;
                    case 'Ends with':
                        if (!testValue.endsWith(filter.value)) {
                            return false;
                        }
                        break;
                }
            }

            return true;
        };
    }

    /**
     * Returns the next available student id.
     */
    getNextStudentId(): number {
        let maxStudentId = 0;
        for (const student of this.EMPLOYEES) {
            if (maxStudentId < student.employeeId) {
                maxStudentId = student.employeeId;
            }
        }

        return maxStudentId + 1;
    }
}
