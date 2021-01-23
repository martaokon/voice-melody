import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { BasicLayout } from "layout/BasicLayout";
import { Dropzone } from "components/Dropzone";
import { Notification } from "components/Notification";
import { Button } from "@material-ui/core";
import { getSongs, sendFile } from "utils/apiClient";

const Footer = styled.div`
  text-align: right;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;
const SecondButton = styled(Button)`
  &.MuiButtonBase-root {
    margin-right: ${({ theme }) => theme.spacing(2)}px;
  }
`;

const AddSongScreen = () => {
  const [file, setFile] = useState(null);

  const [notificationOpen, setNotificationOpen] = React.useState(false);

  const handleDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const onFileSent = useCallback(() => {
    if (!file) return;

    sendFile(file).then(() => {
      setNotificationOpen(true);
      setFile(null);
    });
  }, [file]);

  return (
    <BasicLayout header="Add song to separate music tracks">
      <Notification
        setOpen={setNotificationOpen}
        open={notificationOpen}
        text={
          "You have sent your music track. You'll get an email as soon as it's separated!"
        }
      />
      <Dropzone onDrop={handleDrop} fileName={file?.name} />
      <Footer>
        <SecondButton onClick={onFileSent} color="secondary">
          Separate
        </SecondButton>
        <Button color="secondary">Upload</Button>
      </Footer>
    </BasicLayout>
  );
};

export { AddSongScreen };
