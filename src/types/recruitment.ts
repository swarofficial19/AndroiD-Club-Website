export type RecruitmentStatus = 'OPEN' | 'CLOSED' | 'UPCOMING';

export type TeamCategory = 'Technical' | 'Non-Technical';

export type TeamId =
  | 'android'
  | 'sdc'
  | 'rnd'
  | 'uiux'
  | 'evm'
  | 'design'
  | 'content'
  | 'finance'
  | 'media'
  | 'pr_outreach';

export interface RoleQuestion {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'url';
  placeholder?: string;
  required: boolean;
  options?: string[];
  helpText?: string;
}

export interface TeamDefinition {
  id: TeamId;
  name: string;
  category: TeamCategory;
  tagline: string;
  description: string;
  keySkills: string[];
  icon: string;
  accentColor: string;
  roleQuestions: RoleQuestion[];
}

export interface CoordinatorContact {
  name: string;
  role: string;
  phone?: string;
  email?: string;
}

export interface RecruitmentConfig {
  title: string;
  subTitle: string;
  description: string;
  status: RecruitmentStatus;
  targetBatches: string[];
  deadlineDate: string; // ISO or formatted
  deadlineFormatted: string;
  officialEmail: string;
  facultyCoordinator: CoordinatorContact;
  studentCoordinators: CoordinatorContact[];
}

export interface ApplicationFormData {
  // Step 1: Personal Info
  fullName: string;
  regNumber: string;
  collegeEmail: string;
  personalEmail: string;
  phoneNumber: string;
  gender: string;
  residenceType: 'Hosteller' | 'Day Scholar' | '';
  currentCity: string;

  // Step 2: Academic Info
  batch: '2025 Batch (Academic Year 2025–26)' | '2026 Batch' | '';
  degreeBranch: string;
  currentSemester: string;
  cgpa: string;
  college: string;

  // Step 3: Team Selection
  primaryTeam: TeamId | '';
  secondaryTeam: TeamId | '';
  whyJoinTeam: string;

  // Step 4: Role-specific dynamic responses (key is question id)
  roleResponses: Record<string, string>;

  // Step 5: Skills & Experience
  skills: string[];
  pastExperience: string;
  githubUrl: string;
  linkedinUrl: string;
  portfolioUrl: string;
  otherProfileUrl: string;

  // Step 6: Agreements
  agreementAccepted: boolean;
}

export interface SubmittedApplicationRecord {
  referenceId: string;
  submittedAt: string;
  data: ApplicationFormData;
  primaryTeamName: string;
  secondaryTeamName?: string;
}
