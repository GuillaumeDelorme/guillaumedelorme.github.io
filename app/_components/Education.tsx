import React from "react";
import { educationList } from "../_lib/education";
import { Card } from "./Card";
import { Title } from "./Title";
import { CgPin, CgReadme, CgCalendar } from "react-icons/cg";
import { UniversityLogo } from "./UniversityLogo";

export const Education = () => (
  <Card>
    <div className="flex flex-col gap-4">
      <Title level="h2">Formation</Title>

      {educationList.map((education, educationKey) => (
        <React.Fragment key={educationKey}>
          <div>
            <div className="flex gap-4">
              <UniversityLogo university={education.universityLogo} />

              <div className="flex w-full flex-col gap-3 text-sm">
                <Title level="h3">{education.diploma}</Title>

                <div className="flex gap-4 text-sm font-medium text-gray-500">
                  <div className="flex items-center justify-center gap-1">
                    <CgReadme />
                    <div>{education.universityName}</div>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <CgPin />
                    <div>{education.location}</div>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <CgCalendar />
                    <div>{education.period}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {educationKey < educationList.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  </Card>
);
