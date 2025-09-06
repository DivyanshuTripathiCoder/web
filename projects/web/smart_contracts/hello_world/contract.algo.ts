import { Contract, GlobalState } from "@algorandfoundation/algorand-typescript"

export class JobBoard extends Contract {
  // Global state to store latest submitted job
  jobTitle = GlobalState<string>({ key: "jobTitle", initialValue: "" })
  jobDescription = GlobalState<string>({ key: "jobDescription", initialValue: "" })

  // Method to submit a job
  SubmitJob(title: string, description: string): string {
    this.jobTitle.value = title
    this.jobDescription.value = description
    return `Job submitted: ${title}`
  }

  // Method to read back the job (for debugging)
  GetJob(): string {
    return `Title: ${this.jobTitle.value}, Description: ${this.jobDescription.value}`
  }
}
