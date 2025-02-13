import PropTypes from "prop-types";
import { useState } from "react"; // ✅ useState 추가
import "./CreateMoimForm.css";
import "./Step1_MoimInfo.css";

const Step1_MoimInfo = ({
  meetingName,
  setmeetingName,
  groups,
  group,
  setGroup,
  meetingCode,
  setmeetingCode,
}) => {
  const [selectColor, setSelectColor] = useState("var(--black30)"); // 기본 색상 설정

  return (
    <div className="form-section">
      <div className="create-container__title">
        <span>1. 모임 이름 및 참여 코드를 작성해주세요.</span>
      </div>
      {/* 그룹 선택 */}
      <div className="step1-form-fields">
        <select
          value={group}
          onChange={(e) => {
            setGroup(e.target.value);
            setSelectColor("black"); // ✅ 선택 후 색상 변경
          }}
          style={{ color: selectColor }} // ✅ 동적으로 색상 변경
        >
          <option
            value=""
            disabled
            selected
            style={{ color: "var(--black20)" }}
          >
            그룹을 선택해주세요.
          </option>
          {groups.length > 0 &&
            groups.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
        </select>
        {/* 모임 이름 작성/ */}
        <div className="input-fields">
          <span>모임 이름</span>
          <input
            type="text"
            id="moim-name"
            name="name"
            placeholder="모임 이름을 작성해주세요."
            required
            value={meetingName}
            onChange={(e) => setmeetingName(e.target.value)}
          />
        </div>
        {/* 참여 코드/ */}
        <div className="input-fields">
          <span>참여 코드</span>
          <input
            type="text"
            id="moim-pwd"
            name="name"
            placeholder="숫자 4자리"
            required
            value={meetingCode}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 입력
              if (numericValue.length <= 4) {
                // 4글자까지만 입력 가능
                setmeetingCode(numericValue);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Step1_MoimInfo;
