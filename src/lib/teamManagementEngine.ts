export type TeamMember = {
  id: string;

  name: string;

  email: string;

  role: string;

  active: boolean;
};

export type Team = {
  id: string;

  organizationId: string;

  name: string;

  memberCount: number;

  members: TeamMember[];
};

export const demoTeam: Team = {
  id: "team-platform",

  organizationId: "org-001",

  name: "Platform Engineering",

  memberCount: 4,

  members: [
    {
      id: "user-001",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Admin",
      active: true,
    },
    {
      id: "user-002",
      name: "Michael Chen",
      email: "michael@example.com",
      role: "Engineer",
      active: true,
    },
    {
      id: "user-003",
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Architect",
      active: true,
    },
    {
      id: "user-004",
      name: "James Wilson",
      email: "james@example.com",
      role: "Auditor",
      active: true,
    },
  ],
};

export function getTeam() {
  return demoTeam;
}

export function getActiveMembers(
  team: Team,
) {
  return team.members.filter(
    (member) => member.active,
  );
}

export function getTeamHealthScore(
  team: Team,
) {
  const activeMembers =
    getActiveMembers(team).length;

  return Math.min(
    70 + activeMembers * 5,
    100,
  );
}

export function getRoleDistribution(
  team: Team,
) {
  return team.members.reduce(
    (acc, member) => {
      acc[member.role] =
        (acc[member.role] || 0) + 1;

      return acc;
    },
    {} as Record<string, number>,
  );
}