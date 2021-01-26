import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { BasicLayout } from "layout/BasicLayout";
import { Dropzone } from "components/Dropzone";
import { Notification } from "components/Notification";
import { Button, CircularProgress } from "@material-ui/core";
import { sendFile } from "utils/apiClient";

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
  const [loading, setLoading] = useState(false);

  const [notificationOpen, setNotificationOpen] = React.useState(false);

  const handleDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const onFileSent = useCallback(() => {
    if (!file) return;

    setLoading(true);
    sendFile(file).then(() => {
      setNotificationOpen(true);
      setLoading(false);
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
        {loading ? (
          <CircularProgress />
        ) : (
          file?.name && (
            <SecondButton
              onClick={onFileSent}
              color="primary"
              variant="contained"
            >
              Separate
            </SecondButton>
          )
        )}
      </Footer>
    </BasicLayout>
  );
};

export { AddSongScreen };
