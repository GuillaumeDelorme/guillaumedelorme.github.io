import React from "react";
import { experienceList } from "../_lib/experience";
import { Card } from "./Card";
import { CompanyLogo } from "./CompanyLogo";
import { Title } from "./Title";
import { CgPin, CgWorkAlt, CgCalendar } from "react-icons/cg";

export const Experience = () => (
  <Card>
    <div className="flex flex-col gap-4">
      <Title level="h2">Expérience</Title>

      {experienceList.map((experience, experienceKey) => (
        <React.Fragment key={experienceKey}>
          <div>
            <div className="flex gap-4">
              <div className="flex flex-none flex-col items-center gap-3">
                <CompanyLogo company={experience.companyLogo} size="medium" />

                {experience.subCompanyLogos?.map((company, subCompanyKey) => (
                  <CompanyLogo
                    key={subCompanyKey}
                    company={company}
                    size="small"
                  />
                ))}
              </div>

              <div className="flex w-full flex-col gap-3 text-sm">
                <Title level="h3">{experience.title}</Title>

                <div className="flex gap-4 text-sm font-medium text-gray-500">
                  <div className="flex items-center justify-center gap-1">
                    <CgWorkAlt />
                    <div>{experience.companyName}</div>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <CgPin />
                    <div>{experience.location}</div>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <CgCalendar />
                    <div>{experience.period}</div>
                  </div>
                </div>

                <div>
                  <strong>Missions :</strong>
                  <ul className="list-inside list-disc">
                    {experience.missions.map((mission, missionKey) => (
                      <li key={missionKey}>{mission}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong>Technologies :</strong>
                  <ul className="list-inside list-disc">
                    {experience.technologies.map(
                      (technology, technologyKey) => (
                        <li key={technologyKey}>{technology}</li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {experienceKey < experienceList.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  </Card>
);
