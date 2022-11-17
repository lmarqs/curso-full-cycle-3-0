FROM golang:1-alpine as BUILDER

WORKDIR /go/src/app

RUN go mod init

COPY . src/

RUN CGO_ENABLED=0 GOOS=linux go build src/app.go

FROM scratch

COPY --from=BUILDER /go/src/app .

CMD [ "./app" ]