from fastapi import HTTPException, status


class ResourceNotFoundException(HTTPException):
    def __init__(self, resource: str):
        super().__init__(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"{resource} not found.",
        )


class DuplicateResourceException(HTTPException):
    def __init__(self, resource: str):
        super().__init__(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"{resource} already exists.",
        )
