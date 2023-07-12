import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";

const OrganizationalStructure = () => {
  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 8px;
    display: inline-block;
    border: 1px solid;
    cursor: pointer;
    &:hover {
      background-color: #4db8ff;
      color: white;
    }
  `;

  return (
    <>
      <div className="mb-5 police_req">
        <div className="mt-5 row recruit_title">Organization Structure</div>
        <hr className="hr_title" />
        <Tree
          lineWidth={"2px"}
          lineColor={"blue"}
          lineBorderRadius={"10px"}
          label={<StyledNode>Commissioner of Police Navi Mumbai</StyledNode>}
          className="w-full"
        >
          <TreeNode
            label={
              <StyledNode>Jt. Commissioner of Police Navi Mumbai</StyledNode>
            }
          >
            <TreeNode label={<StyledNode>DCP Zone 1</StyledNode>}>
              <TreeNode label={<StyledNode>ACP Turbhe</StyledNode>}>
                <TreeNode label={<StyledNode>Turbhe</StyledNode>}>
                  <TreeNode label={<StyledNode>Sanpada</StyledNode>}>
                    <TreeNode label={<StyledNode>Nerul</StyledNode>}>
                      <TreeNode label={<StyledNode>NRI Sagari</StyledNode>}>
                        <TreeNode
                          label={<StyledNode>CBD Belapur</StyledNode>}
                        ></TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </TreeNode>

            <TreeNode label={<StyledNode>ACP Vashi</StyledNode>}>
              <TreeNode label={<StyledNode>Vashi</StyledNode>}>
                <TreeNode label={<StyledNode>APMC</StyledNode>}>
                  <TreeNode label={<StyledNode>Rabale</StyledNode>}>
                    <TreeNode label={<StyledNode>Rabale MIDC</StyledNode>}>
                      <TreeNode
                        label={<StyledNode>Kopar Khairane</StyledNode>}
                      ></TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </TreeNode>

            <TreeNode label={<StyledNode>DCP Zone 2</StyledNode>}>
              <TreeNode label={<StyledNode>ACP Panvel</StyledNode>}>
                <TreeNode label={<StyledNode>Kharghar</StyledNode>}>
                  <TreeNode label={<StyledNode>Kamothe</StyledNode>}>
                    <TreeNode label={<StyledNode>Kalamboli</StyledNode>}>
                      <TreeNode label={<StyledNode>Khandeshwar</StyledNode>}>
                        <TreeNode label={<StyledNode>Taloja</StyledNode>}>
                          <TreeNode label={<StyledNode>Panvel</StyledNode>}>
                            <TreeNode
                              label={<StyledNode>Panvel Taluka</StyledNode>}
                            ></TreeNode>
                          </TreeNode>
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>

              <TreeNode label={<StyledNode>ACP Port</StyledNode>}>
                <TreeNode label={<StyledNode>Uran</StyledNode>}>
                  <TreeNode label={<StyledNode>Nhava Sheva</StyledNode>}>
                    <TreeNode
                      label={<StyledNode>Mora Sagari</StyledNode>}
                    ></TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>

              <TreeNode label={<StyledNode>DCP Traffic</StyledNode>}>
                <TreeNode label={<StyledNode>ACP Traffic</StyledNode>}>
                  <TreeNode label={<StyledNode>Vashi</StyledNode>}>
                    <TreeNode label={<StyledNode>APMC</StyledNode>}>
                      <TreeNode label={<StyledNode>Kopar Khairane</StyledNode>}>
                        <TreeNode label={<StyledNode>Rabale</StyledNode>}>
                          <TreeNode label={<StyledNode>Mahape</StyledNode>}>
                            <TreeNode label={<StyledNode>Turbhe</StyledNode>}>
                              <TreeNode
                                label={<StyledNode>Seawood</StyledNode>}
                              >
                                <TreeNode label={<StyledNode>CBD</StyledNode>}>
                                  <TreeNode
                                    label={<StyledNode>Kharghar</StyledNode>}
                                  >
                                    <TreeNode
                                      label={<StyledNode>Taloa</StyledNode>}
                                    >
                                      <TreeNode
                                        label={
                                          <StyledNode>Kalamboli</StyledNode>
                                        }
                                      >
                                        <TreeNode
                                          label={
                                            <StyledNode>Panvel</StyledNode>
                                          }
                                        >
                                          <TreeNode
                                            label={
                                              <StyledNode>
                                                Navin Panvel
                                              </StyledNode>
                                            }
                                          >
                                            <TreeNode
                                              label={
                                                <StyledNode>
                                                  Gavhan Phata
                                                </StyledNode>
                                              }
                                            >
                                              <TreeNode
                                                label={
                                                  <StyledNode>Uran</StyledNode>
                                                }
                                              >
                                                <TreeNode
                                                  label={
                                                    <StyledNode>
                                                      Nhavasheva
                                                    </StyledNode>
                                                  }
                                                ></TreeNode>
                                              </TreeNode>
                                            </TreeNode>
                                          </TreeNode>
                                        </TreeNode>
                                      </TreeNode>
                                    </TreeNode>
                                  </TreeNode>
                                </TreeNode>
                              </TreeNode>
                            </TreeNode>
                          </TreeNode>
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </TreeNode>

            <TreeNode label={<StyledNode>DCP Headquarter</StyledNode>}>
              <TreeNode label={<StyledNode>ACP</StyledNode>}>
                <TreeNode
                  label={<StyledNode>ACP Control Room (CRO)</StyledNode>}
                ></TreeNode>
              </TreeNode>
              <TreeNode label={<StyledNode>ACP Admin</StyledNode>}>
                <TreeNode
                  label={
                    <StyledNode>
                      RP1 Headquarter & PI Motar Transport
                    </StyledNode>
                  }
                ></TreeNode>
              </TreeNode>
              <TreeNode label={<StyledNode>ACP Encroachment</StyledNode>}>
                <TreeNode
                  label={
                    <StyledNode>
                      PI Enchroachment NMMC & PI Enchroachment CIDCO
                    </StyledNode>
                  }
                ></TreeNode>
              </TreeNode>
              <TreeNode label={<StyledNode>ACP Wireless</StyledNode>}>
                <TreeNode label={<StyledNode>PI Wireless</StyledNode>}>
                  <TreeNode label={<StyledNode>Wireless Workshop</StyledNode>}>
                    <TreeNode
                      label={<StyledNode>CCTV Command Center</StyledNode>}
                    >
                      <TreeNode
                        label={
                          <StyledNode>CIDCO CCTV Command Center</StyledNode>
                        }
                      ></TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
              <TreeNode label={<StyledNode>Administrative Officer</StyledNode>}>
                <TreeNode
                  label={
                    <StyledNode>
                      Office Suprintendent & Ministerial Staff
                    </StyledNode>
                  }
                ></TreeNode>
              </TreeNode>
            </TreeNode>

            <TreeNode label={<StyledNode>DCP Special</StyledNode>}>
              <TreeNode label={<StyledNode>ACP Special</StyledNode>}>
                <TreeNode label={<StyledNode>PI Special Branch</StyledNode>}>
                  <TreeNode label={<StyledNode>PI Security</StyledNode>}>
                    <TreeNode label={<StyledNode>BDDS</StyledNode>}>
                      <TreeNode
                        label={<StyledNode>Costal Security</StyledNode>}
                      >
                        <TreeNode
                          label={<StyledNode>Passport Branch</StyledNode>}
                        >
                          <TreeNode
                            label={<StyledNode>RBI Security</StyledNode>}
                          ></TreeNode>
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </TreeNode>
          </TreeNode>

          <TreeNode
            label={
              <StyledNode>
                Addl. Commissioner of Police, Crime Navi Mumbai
              </StyledNode>
            }
          >
            <TreeNode label={<StyledNode>DCP Crime</StyledNode>}>
              <TreeNode label={<StyledNode>ACP Crime</StyledNode>}>
                <TreeNode label={<StyledNode>123 & Central Unit</StyledNode>}>
                  <TreeNode
                    label={<StyledNode>Women Assistance Cells</StyledNode>}
                  >
                    <TreeNode label={<StyledNode>Bharosa Cell</StyledNode>}>
                      <TreeNode label={<StyledNode>Cyber Cell</StyledNode>}>
                        <TreeNode
                          label={<StyledNode>Anti Narcotics</StyledNode>}
                        >
                          <TreeNode
                            label={<StyledNode>Motar Vehicle Theft</StyledNode>}
                          >
                            <TreeNode
                              label={
                                <StyledNode>Social Service Cell</StyledNode>
                              }
                            ></TreeNode>
                          </TreeNode>
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </TreeNode>

            <TreeNode label={<StyledNode>ACP EOW</StyledNode>}>
              <TreeNode
                label={<StyledNode>UNIT 1 & UNIT 2</StyledNode>}
              ></TreeNode>
            </TreeNode>

            <TreeNode label={<StyledNode>ACP AHTU</StyledNode>}>
              <TreeNode label={<StyledNode>PI AHTU</StyledNode>}></TreeNode>
            </TreeNode>
          </TreeNode>
        </Tree>
      </div>
    </>
  );
};

export default OrganizationalStructure;
