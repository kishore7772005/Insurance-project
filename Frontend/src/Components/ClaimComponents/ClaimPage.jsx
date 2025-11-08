import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClaimPage = () => {
  // Initial sample claim to show user-side claims on page load
  const initialClaims = [
    {
      id: 1,
      policyNumber: "PN123456789",
      claimType: "Health",
      description: "Hospitalization due to surgery.",
      status: "Under Review",
      date: "2025-10-10",
    },
    {
      id: 2,
      policyNumber: "PN987654321",
      claimType: "Accident",
      description: "Fracture claim after road accident.",
      status: "Approved",
      date: "2025-09-15",
    },
  ];

  const [claimData, setClaimData] = useState({
    policyNumber: "",
    claimType: "",
    description: "",
  });

  const [submittedClaims, setSubmittedClaims] = useState(initialClaims);
  const [statusFilter, setStatusFilter] = useState("All");

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Validation on submit
  const validate = () => {
    const errs = {};
    if (!claimData.policyNumber.trim()) errs.policyNumber = "Policy Number is required.";
    if (!claimData.claimType) errs.claimType = "Please select claim type.";
    if (!claimData.description.trim()) errs.description = "Please provide description.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClaimData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setShowModal(true);
  };

  const confirmSubmit = () => {
    const newClaim = {
      id: submittedClaims.length + 1,
      ...claimData,
      status: "Under Review",
      date: new Date().toISOString().split("T")[0],
    };
    setSubmittedClaims((prev) => [newClaim, ...prev]);
    setClaimData({ policyNumber: "", claimType: "", description: "" });
    setErrors({});
    setShowModal(false);
  };

  const cancelSubmit = () => setShowModal(false);

  const updateClaimStatus = (id, newStatus) => {
    setSubmittedClaims((prev) =>
      prev.map((claim) => (claim.id === id ? { ...claim, status: newStatus } : claim))
    );
  };

  const themeColor = "rgb(57, 115, 210)";
  const themeColorDark = "rgb(45, 90, 165)";
  const whiteColor = "#fff";
  const warningColor = "#ffc107";
  const warningTextDark = "#4a4a4a";

  const filteredClaims =
    statusFilter === "All"
      ? submittedClaims
      : submittedClaims.filter((claim) => claim.status === statusFilter);

  return (
    <div style={{ backgroundColor: whiteColor, padding: "3rem 1rem", minHeight: "100vh" }}>
      <div
        className="container"
        style={{ maxWidth: 900, margin: "0 auto" }}
        aria-label="Claim Portal"
      >
        {/* Header */}
        <header
          style={{ textAlign: "center", marginBottom: "3rem" }}
          data-aos="fade-up"
          role="banner"
        >
          <h1
            style={{
              fontWeight: "700",
              color: themeColor,
              fontSize: "2.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Claim Portal
          </h1>
          <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>
            Submit and track your insurance claims with real-time status updates.
          </p>
        </header>

        {/* Form Card */}
        <section
          className="card shadow-lg border-0 rounded-4 mx-auto mb-5"
          style={{ padding: "2rem", maxWidth: "100%" }}
          data-aos="fade-up"
          aria-labelledby="submit-claim-heading"
        >
          <h2
            id="submit-claim-heading"
            style={{ fontWeight: "600", marginBottom: "1.5rem", color: themeColor }}
          >
            Submit a New Claim
          </h2>
          <form onSubmit={handleSubmit} noValidate>
            <div
              className="row g-3"
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
            >
              {/* Policy Number */}
              <div style={{ flex: "1 1 45%", minWidth: 260 }}>
                <label
                  htmlFor="policyNumber"
                  style={{ fontWeight: "600", display: "block", marginBottom: 6 }}
                >
                  Policy Number <span aria-hidden="true" style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="policyNumber"
                  name="policyNumber"
                  value={claimData.policyNumber}
                  onChange={handleChange}
                  placeholder="Enter Policy Number"
                  aria-required="true"
                  aria-invalid={errors.policyNumber ? "true" : "false"}
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    borderRadius: 6,
                    border: errors.policyNumber
                      ? "2px solid #dc3545"
                      : "1px solid #ced4da",
                    outline: "none",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = themeColor)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.policyNumber ? "#dc3545" : "#ced4da")
                  }
                />
                {errors.policyNumber && (
                  <p
                    role="alert"
                    style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: 4 }}
                  >
                    {errors.policyNumber}
                  </p>
                )}
              </div>

              {/* Claim Type */}
              <div style={{ flex: "1 1 45%", minWidth: 260 }}>
                <label
                  htmlFor="claimType"
                  style={{ fontWeight: "600", display: "block", marginBottom: 6 }}
                >
                  Claim Type <span aria-hidden="true" style={{ color: "red" }}>*</span>
                </label>
                <select
                  id="claimType"
                  name="claimType"
                  value={claimData.claimType}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.claimType ? "true" : "false"}
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    borderRadius: 6,
                    border: errors.claimType ? "2px solid #dc3545" : "1px solid #ced4da",
                    backgroundColor: "#fff",
                    outline: "none",
                    color: claimData.claimType ? "#000" : "#6c757d",
                    cursor: "pointer",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = themeColor)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.claimType ? "#dc3545" : "#ced4da")
                  }
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  <option value="Health">Health Claim</option>
                  <option value="Accident">Accident Claim</option>
                  <option value="Hospitalization">Hospitalization</option>
                  <option value="Critical Illness">Critical Illness</option>
                </select>
                {errors.claimType && (
                  <p
                    role="alert"
                    style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: 4 }}
                  >
                    {errors.claimType}
                  </p>
                )}
              </div>

              {/* Description */}
              <div style={{ flex: "1 1 100%" }}>
                <label
                  htmlFor="description"
                  style={{ fontWeight: "600", display: "block", marginBottom: 6 }}
                >
                  Claim Description <span aria-hidden="true" style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={claimData.description}
                  onChange={handleChange}
                  placeholder="Describe your claim..."
                  aria-required="true"
                  aria-invalid={errors.description ? "true" : "false"}
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    borderRadius: 6,
                    border: errors.description ? "2px solid #dc3545" : "1px solid #ced4da",
                    outline: "none",
                    resize: "vertical",
                    minHeight: 100,
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = themeColor)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.description ? "#dc3545" : "#ced4da")
                  }
                />
                {errors.description && (
                  <p
                    role="alert"
                    style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: 4 }}
                  >
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div
              style={{
                textAlign: "center",
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <button
                type="submit"
                style={{
                  backgroundColor: themeColor,
                  color: whiteColor,
                  border: "none",
                  padding: "0.5rem 2.5rem",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  borderRadius: 6,
                  cursor: "pointer",
                  boxShadow: `0 2px 6px ${themeColor}55`,
                  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = themeColorDark;
                  e.currentTarget.style.boxShadow = `0 4px 12px ${themeColorDark}cc`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = themeColor;
                  e.currentTarget.style.boxShadow = `0 2px 6px ${themeColor}55`;
                }}
                aria-label="Submit Claim"
              >
                Submit Claim
              </button>

              <button
                type="button"
                style={{
                  backgroundColor: "#6c757d",
                  color: whiteColor,
                  border: "none",
                  padding: "0.5rem 1.5rem",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  borderRadius: 6,
                  cursor: "pointer",
                  boxShadow: "0 2px 6px #6c757d55",
                  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onClick={() => {
                  setClaimData({ policyNumber: "", claimType: "", description: "" });
                  setErrors({});
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#5a6268";
                  e.currentTarget.style.boxShadow = "0 4px 12px #5a6268cc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#6c757d";
                  e.currentTarget.style.boxShadow = "0 2px 6px #6c757d55";
                }}
                aria-label="Clear Form"
              >
                Clear
              </button>
            </div>
          </form>
        </section>

        {/* Filter Section */}
        {submittedClaims.length > 0 && (
          <section
            style={{ textAlign: "center", marginBottom: "2rem" }}
            data-aos="fade-up"
            aria-label="Filter Claims by Status"
          >
            <h2
              style={{ fontWeight: "600", color: themeColor, marginBottom: 8 }}
            >
              Track Your Claim Status
            </h2>
            <select
              aria-label="Filter claims by status"
              style={{
                minWidth: 220,
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                borderRadius: 6,
                border: `2px solid ${themeColor}`,
                color: themeColor,
                cursor: "pointer",
                outline: "none",
              }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = themeColorDark)}
              onBlur={(e) => (e.target.style.borderColor = themeColor)}
            >
              <option value="All">All Claims</option>
              <option value="Under Review">Under Review</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </section>
        )}

        {/* Claims List */}
        <section
          className="row g-4"
          data-aos="fade-up"
          aria-live="polite"
          aria-relevant="additions removals"
          aria-label="List of submitted claims"
          style={{ marginBottom: 60 }}
        >
          {filteredClaims.length > 0 ? (
            filteredClaims.map((claim) => (
              <article
                key={claim.id}
                className="col-lg-6 col-md-12"
                style={{ cursor: "default" }}
                aria-label={`Claim ${claim.id} for policy ${claim.policyNumber}`}
                tabIndex={0}
              >
                <div
                  className="card shadow-sm border-0 rounded-4 h-100 bg-white"
                  style={{
                    transition: "transform 0.3s",
                    boxShadow: `0 0 10px 0 ${themeColor}33`,
                    padding: 20,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <h3
                    style={{
                      fontWeight: "700",
                      color: themeColor,
                      marginBottom: "0.5rem",
                      fontSize: "1.25rem",
                    }}
                  >
                    Claim #{claim.id} — {claim.claimType}
                  </h3>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "0.9rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <strong>Policy No:</strong> {claim.policyNumber}
                  </p>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "0.9rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {claim.description}
                  </p>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "0.85rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <strong>Date:</strong> {claim.date}
                  </p>
                  <p style={{ marginBottom: "0.5rem" }}>
                    <strong>Status:</strong>{" "}
                    <span
                      style={{
                        padding: "0.25em 0.6em",
                        fontSize: "0.75em",
                        fontWeight: "700",
                        borderRadius: "0.375rem",
                        color:
                          claim.status === "Under Review"
                            ? warningTextDark
                            : whiteColor,
                        backgroundColor:
                          claim.status === "Approved"
                            ? "#198754"
                            : claim.status === "Rejected"
                            ? "#dc3545"
                            : warningColor,
                      }}
                      aria-label={`Claim status is ${claim.status}`}
                    >
                      {claim.status}
                    </span>
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginTop: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "#198754",
                        border: "none",
                        color: whiteColor,
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        borderRadius: "0.25rem",
                        cursor: "pointer",
                        flex: "1",
                        minWidth: 100,
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#146c43")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#198754")
                      }
                      onClick={() => updateClaimStatus(claim.id, "Approved")}
                      aria-label={`Approve claim ${claim.id}`}
                    >
                      Approve
                    </button>
                    <button
                      style={{
                        backgroundColor: "#dc3545",
                        border: "none",
                        color: whiteColor,
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        borderRadius: "0.25rem",
                        cursor: "pointer",
                        flex: "1",
                        minWidth: 100,
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#a71d2a")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#dc3545")
                      }
                      onClick={() => updateClaimStatus(claim.id, "Rejected")}
                      aria-label={`Reject claim ${claim.id}`}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#6c757d", fontSize: "1.1rem" }}>
              No claims submitted yet.
            </p>
          )}
        </section>

        {/* Confirmation Modal */}
        {showModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-modal-title"
            aria-describedby="confirm-modal-desc"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <div
              style={{
                backgroundColor: whiteColor,
                borderRadius: 10,
                padding: "2rem",
                maxWidth: 400,
                width: "90%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                textAlign: "center",
              }}
            >
              <h3
                id="confirm-modal-title"
                style={{ marginBottom: "1rem", color: themeColor }}
              >
                Confirm Claim Submission
              </h3>
              <p id="confirm-modal-desc" style={{ marginBottom: "2rem", color: "#444" }}>
                Are you sure you want to submit this claim? Please confirm.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                <button
                  onClick={confirmSubmit}
                  style={{
                    backgroundColor: themeColor,
                    color: whiteColor,
                    border: "none",
                    padding: "0.5rem 1.5rem",
                    fontWeight: "600",
                    borderRadius: 6,
                    cursor: "pointer",
                    boxShadow: `0 2px 8px ${themeColor}aa`,
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = themeColorDark)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = themeColor)}
                >
                  Yes, Submit
                </button>
                <button
                  onClick={cancelSubmit}
                  style={{
                    backgroundColor: "#6c757d",
                    color: whiteColor,
                    border: "none",
                    padding: "0.5rem 1.5rem",
                    fontWeight: "600",
                    borderRadius: 6,
                    cursor: "pointer",
                    boxShadow: "0 2px 8px #6c757daa",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5a6268")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6c757d")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimPage;
